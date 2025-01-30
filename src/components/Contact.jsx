import { Poppins } from "next/font/google";
import Link from "next/link";

const poppins = Poppins({ weight: "400", subsets: ["latin"] });

const Contact = () => {
  return (
    <section
      id="contact"
      className="flex flex-col space-y-10 justify-center items-center h-screen"
    >
      <span className="border-b-2 md:w-[25em] p-2 border-foreground-light dark:border-foreground-dark text-center space-y-2">
        <h1 className={`${poppins.className} text-2xl md:text-4xl`}>
          Let&apos;s Connect!
        </h1>

        <p className="text-[18px]">Bug-free chats guaranteed (mostly)!</p>
      </span>

      <div className="flex flex-col border-[1px] px-4 hover:border-none border-foreground-light dark:border-foreground-dark text-center hover-underline-animation text-[24px] mt-5">
        <Link href="mailto:muhammad.ab2024@gmail.com">
          <span>Say Hello</span>
        </Link>
      </div>
    </section>
  );
};

export default Contact;
