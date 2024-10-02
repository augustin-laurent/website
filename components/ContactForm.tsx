"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import Button from "@/components/Button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
});

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      if (response.ok) {
        toast({
          title: "Success",
          description: "Your message has been sent successfully!",
        });
        form.reset();
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      toast({
        title: "Error",
        description: `There was a problem sending your message ${error}. Please try again.`,
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="relative">
      <div className="absolute inset-0 bg-black translate-x-1 translate-y-1 rounded-xl" />
      <div className="relative bg-white rounded-xl border-2 border-black border-solid p-5 w-full">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-xl font-medium">Name</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <div className="absolute inset-0 bg-black translate-x-1 translate-y-1 rounded-md" />
                      <Input placeholder="Your name" {...field} className="relative border-2 border-solid border-black bg-white" />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-xl font-medium">Email</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <div className="absolute inset-0 bg-black translate-x-1 translate-y-1 rounded-md" />
                      <Input placeholder="Your email" {...field} className="relative border-2 border-solid border-black bg-white" />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-xl font-medium">Message</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <div className="absolute inset-0 bg-black translate-x-1 translate-y-1 rounded-md" />
                      <Textarea placeholder="Your message" {...field} className="relative border-2 border-solid border-black bg-white" />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button text={isSubmitting ? "Sending..." : "Send Message"} disabled={isSubmitting} />
          </form>
        </Form>
      </div>
    </div>
  );
}
