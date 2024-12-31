import ModeToggle from "@/components/ToggleTheme";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div>
      <SignedIn>
        <UserButton />
      </SignedIn>
      <SignedOut>
        <SignInButton mode="modal"/>
      </SignedOut>
      <ModeToggle/>
    </div>
  );
}
