import Image from "next/image";
import { getServerSession } from "next-auth";

import { FoxPageHeader } from "@/components/FoxPageHeader";
import { authOptions } from "@/lib/auth";
import { defaultHomeForRole } from "@/lib/rbac";
import { t } from "@/lib/i18n";

export default async function AppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);
  const roleTitle =
    session?.user?.role === "SCHOOL_ADMIN"
      ? t("common.adminDashboard")
      : session?.user?.role === "TEACHER"
        ? t("common.teacherSpace")
        : session?.user
          ? t("common.studentSpace")
          : t("common.space");
  const teacherShortcuts =
    session?.user?.role === "TEACHER"
      ? [
          { label: t("common.schedule"), href: "/teacher/courses/agenda?view=month" },
          { label: t("common.positions"), href: "/teacher/positions" },
        ]
      : [];
  const headerButtons = session?.user
    ? [
        ...teacherShortcuts,
        {
          label: t("common.mySpace"),
          href: defaultHomeForRole(session.user.role),
          icon: <Image src="/house.svg" alt="" className="h-4 w-4" width={16} height={16} priority />,
        },
        { label: t("common.signOut"), href: "/api/auth/signout" },
      ]
    : [{ label: t("common.signIn"), href: "/login", variant: "primary" as const }];

  return (
    <main className="mx-auto flex min-h-screen max-w-6xl flex-col gap-6 px-2 pt-0 pb-2 md:px-8 md:pt-0 md:pb-4">
      <FoxPageHeader
        title={roleTitle}
        eyebrow={
          session?.user?.role === "SCHOOL_ADMIN"
            ? t("common.adminSpace")
            : session?.user?.role === "TEACHER"
              ? t("common.teacherSpace")
              : t("common.studentSpace")
        }
        buttons={headerButtons}
        foxHref="/"
      />
      {children}
    </main>
  );
}
