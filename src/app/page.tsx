import Image from "next/image";


export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col items-center justify-center min-h-[60vh] gap-8 text-center">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />

        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight mb-4">
            Welcome to Auth.js Template
          </h1>
          <p className="text-lg text-muted-foreground mb-8">
            A modern Next.js template with authentication and shadcn/ui
            components
          </p>
        </div>
      </div>
    </div>
  );
}
