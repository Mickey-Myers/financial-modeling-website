import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { insertContactSubmissionSchema } from "@shared/schema";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import type { z } from "zod";

type ContactFormData = z.infer<typeof insertContactSubmissionSchema>;

export default function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const { ref, isIntersecting } = useIntersectionObserver();

  const form = useForm<ContactFormData>({
    resolver: zodResolver(insertContactSubmissionSchema),
    defaultValues: {
      fullName: "",
      company: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  const contactMutation = useMutation({
    mutationFn: async (data: ContactFormData) => {
      const response = await apiRequest("POST", "/api/contact", data);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Success!",
        description: "Your message has been sent. We'll get back to you soon.",
      });
      form.reset();
      setIsSubmitting(false);
    },
    onError: (error: any) => {
      toast({
        title: "Error",
        description: error.message || "Something went wrong. Please try again.",
        variant: "destructive",
      });
      setIsSubmitting(false);
    },
  });

  const onSubmit = (data: ContactFormData) => {
    setIsSubmitting(true);
    contactMutation.mutate(data);
  };

  return (
    <section id="contact" className="py-20 bg-navy-800">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          ref={ref}
          className={`text-center mb-12 fade-in ${isIntersecting ? "visible" : ""}`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Start Your Project</h2>
          <p className="text-xl text-blue-100">Ready to get started? Let's build your financial model.</p>
        </div>

        <form 
          onSubmit={form.handleSubmit(onSubmit)}
          className="bg-white rounded-2xl p-8 shadow-2xl"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <Label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-2">
                Full Name *
              </Label>
              <Input
                id="fullName"
                type="text"
                {...form.register("fullName")}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy-800 focus:border-transparent"
                disabled={isSubmitting}
              />
              {form.formState.errors.fullName && (
                <p className="text-red-500 text-sm mt-1">{form.formState.errors.fullName.message}</p>
              )}
            </div>
            <div>
              <Label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                Company
              </Label>
              <Input
                id="company"
                type="text"
                {...form.register("company")}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy-800 focus:border-transparent"
                disabled={isSubmitting}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <Label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email *
              </Label>
              <Input
                id="email"
                type="email"
                {...form.register("email")}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy-800 focus:border-transparent"
                disabled={isSubmitting}
              />
              {form.formState.errors.email && (
                <p className="text-red-500 text-sm mt-1">{form.formState.errors.email.message}</p>
              )}
            </div>
            <div>
              <Label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                Phone
              </Label>
              <Input
                id="phone"
                type="tel"
                {...form.register("phone")}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy-800 focus:border-transparent"
                disabled={isSubmitting}
              />
            </div>
          </div>

          <div className="mb-6">
            <Label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
              Message
            </Label>
            <Textarea
              id="message"
              rows={4}
              {...form.register("message")}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy-800 focus:border-transparent"
              placeholder="Tell us about your project and requirements..."
              disabled={isSubmitting}
            />
          </div>

          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-navy-800 text-white py-4 px-8 rounded-lg text-lg font-semibold hover:bg-navy-700 transition-colors duration-300 disabled:opacity-50"
          >
            {isSubmitting ? "Sending..." : "Start Your Project"}
          </Button>

          <p className="text-sm text-gray-500 text-center mt-4">
            We respect your privacy and never send marketing emails
          </p>
        </form>
      </div>
    </section>
  );
}
