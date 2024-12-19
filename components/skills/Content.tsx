import Link from "next/link";

const Content = () => {
  return (
    <div className="max-w-2xl flex flex-col gap-3 dark:text-gray-400">
      <p>
        I&apos;ve spent over a year honing my skills as a DevOps engineer,
        working on a variety of&nbsp;
        <Link href="/projects" className="text-secondary">
          <span>projects</span>
        </Link>
        &nbsp;and gaining valuable industry-level&nbsp;
        <Link href="/work" className="text-secondary">
          <span>experience</span>
        </Link>
        &nbsp;.
      </p>
    </div>
  );
};

export default Content;
