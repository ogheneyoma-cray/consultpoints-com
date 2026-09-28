export type Service = {
  id: string;
  slug: string;
  name: string;
  category: string;
  price: number; // NGN
  summary: string;
  description: string;
  image: string;
  deliverables: string[];
  turnaround: string;
};

export const services: Service[] = [
  {
    id: "1",
    slug: "managed-it-help-desk-support",
    name: "Managed IT Help Desk Support",
    category: "Support",
    price: 220000,
    summary:
      "A monthly help desk your staff can actually reach, covering day to day IT issues before they turn into downtime.",
    description:
      "Managed IT Help Desk Support gives your team a direct line for the everyday problems that quietly eat a working day, a frozen application, a printer that will not connect, a login that has stopped working. We log every ticket, track response times against a clear standard, and follow up on anything that is not resolved on the first reply. It is billed monthly and designed for a business that would rather have a team already familiar with its setup than start from scratch with a new technician every time something breaks.",
    image: "/images/service-helpdesk.jpg",
    deliverables: [
      "Ticketed help desk access for your whole team",
      "Response time tracking with a published standard",
      "Remote troubleshooting for everyday IT issues",
      "Monthly summary of tickets and recurring problems",
    ],
    turnaround: "Monthly retainer, ongoing",
  },
  {
    id: "2",
    slug: "network-infrastructure-setup-cabling",
    name: "Network Infrastructure Setup & Cabling",
    category: "Infrastructure",
    price: 950000,
    summary:
      "A structured network build, from cabling to switches, planned around how your team actually works day to day.",
    description:
      "Network Infrastructure Setup & Cabling covers the physical and logical foundation a growing business runs on, structured cabling, switch configuration, and a network layout planned around your floor plan and headcount rather than a generic template. We label and document every run as it goes in, so a future change or repair does not mean guessing which cable does what. Testing happens before we consider the job finished, not after a problem shows up.",
    image: "/images/service-cabling.jpg",
    deliverables: [
      "Site assessment and cabling plan",
      "Structured cabling and switch installation",
      "Full labeling and network documentation",
      "End to end testing before handover",
    ],
    turnaround: "2 to 4 weeks",
  },
  {
    id: "3",
    slug: "business-wifi-wireless-network-design",
    name: "Business Wi-Fi & Wireless Network Design",
    category: "Infrastructure",
    price: 480000,
    summary:
      "Wireless coverage planned around your actual floor space, not a single router dropped in the nearest socket.",
    description:
      "Business Wi-Fi & Wireless Network Design starts with a proper coverage survey rather than a guess, so access points get placed where your team and equipment actually are, not wherever a cable happens to reach. We separate guest and staff traffic, set up secure authentication, and tune the network for the number of connected devices you actually run rather than a rough estimate. The result is wireless coverage that stays reliable at your busiest hours, not just during a quiet test.",
    image: "/images/service-wifi.jpg",
    deliverables: [
      "Wireless coverage survey and access point plan",
      "Secure staff and guest network separation",
      "Access point installation and configuration",
      "Performance testing under real device load",
    ],
    turnaround: "1 to 3 weeks",
  },
  {
    id: "4",
    slug: "firewall-network-security-hardening",
    name: "Firewall & Network Security Hardening",
    category: "Security",
    price: 620000,
    summary:
      "Firewall configuration, access rules, and monitoring set up to actually reflect how your business uses its network.",
    description:
      "Firewall & Network Security Hardening reviews how data moves in and out of your network and closes the gaps that a default configuration usually leaves open. We configure firewall rules around what your business genuinely needs access to, set up monitoring so unusual activity gets flagged rather than missed, and document every change so your team understands exactly what was adjusted and why. This is not a one time scan, it is a proper hardening pass with a written report at the end.",
    image: "/images/service-security.jpg",
    deliverables: [
      "Network security review and risk assessment",
      "Firewall configuration and access rule hardening",
      "Ongoing activity monitoring setup",
      "Written report of changes made and why",
    ],
    turnaround: "2 to 3 weeks",
  },
  {
    id: "5",
    slug: "cloud-backup-disaster-recovery",
    name: "Cloud Backup & Disaster Recovery",
    category: "Continuity",
    price: 380000,
    summary:
      "Automated backups and a tested recovery plan, so a lost device or a failed drive does not mean lost work.",
    description:
      "Cloud Backup & Disaster Recovery sets up automated, encrypted backups for the data your business actually depends on, then tests the recovery process properly rather than assuming it will work when you need it. We agree a recovery time that fits how your business operates, document the exact recovery steps, and run a test restore so the plan is proven before it is ever needed for real. A backup nobody has tested is not a plan, it is a guess, and we would rather remove that guesswork upfront.",
    image: "/images/service-backup.jpg",
    deliverables: [
      "Automated encrypted backup setup",
      "Defined recovery time and recovery point targets",
      "Documented step by step recovery plan",
      "Test restore to confirm the plan actually works",
    ],
    turnaround: "1 to 2 weeks",
  },
  {
    id: "6",
    slug: "server-setup-virtualization",
    name: "Server Setup & Virtualization",
    category: "Infrastructure",
    price: 1100000,
    summary:
      "A properly planned server environment, virtualized where it makes sense, sized for what your business actually runs.",
    description:
      "Server Setup & Virtualization covers planning, installing, and configuring the server environment your applications and file storage actually run on. Where virtualization makes sense, we consolidate workloads onto fewer physical machines without compromising performance, which keeps both cost and maintenance more manageable. Every server is set up with proper access controls, monitoring, and documented configuration, so your team is never left guessing what was changed or why during a future update.",
    image: "/images/service-virtualization.jpg",
    deliverables: [
      "Server sizing and virtualization planning",
      "Installation and configuration of server environment",
      "Access controls and monitoring setup",
      "Full configuration documentation",
    ],
    turnaround: "3 to 6 weeks",
  },
  {
    id: "7",
    slug: "it-infrastructure-audit-consulting",
    name: "IT Infrastructure Audit & Consulting",
    category: "Consulting",
    price: 300000,
    summary:
      "An honest review of your current setup, what is working, what is a risk, and what is worth fixing first.",
    description:
      "IT Infrastructure Audit & Consulting is a structured review of your current network, hardware, and security setup, ending with a plain language report rather than a sales pitch dressed up as a recommendation. We walk through what is actually working, flag what carries real risk, and prioritise the fixes that matter most against the ones that can wait. It is a good starting point if you are not sure what to fix first, or if you just want an outside, honest opinion on a setup that has grown without a clear plan behind it.",
    image: "/images/service-consulting.jpg",
    deliverables: [
      "Full review of current network and hardware setup",
      "Security and risk assessment",
      "Prioritised, plain language recommendations report",
      "Follow up call to walk through the findings",
    ],
    turnaround: "1 to 2 weeks",
  },
];

export const getServiceBySlug = (slug: string) => services.find((s) => s.slug === slug);
