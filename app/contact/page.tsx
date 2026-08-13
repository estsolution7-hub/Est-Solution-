import { redirect } from "next/navigation";

export default function ContactPage() {
  // The existing contact form already includes a "Request a quote" inquiry type.
  redirect("/#contact");
}
