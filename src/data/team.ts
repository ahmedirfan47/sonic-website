export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  photo: string | null;
  linkedin: string | null;
}

/**
 * TODO(replace): update bio/photo/linkedin with final content before launch.
 * Structure is intentionally simple so adding future team members later is
 * just appending to this array -- no component changes required.
 */
export const team: TeamMember[] = [
  {
    name: "Ahmed",
    role: "Founder",
    bio: "Building Sonic to bring real software to the operations that GCC wholesale and distribution businesses currently run on WhatsApp and memory.",
    photo: null,
    linkedin: null,
  },
];