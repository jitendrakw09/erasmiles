import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const doctors = [
  {
    name: "Dr. Sarah Mitchell",
    email: "dr.sarah@erasmiles.com",
    phone: "(555) 101-2211",
    speciality: "General Dentistry",
    bio: "Focused on preventive dental care and patient comfort.",
    imageUrl: "https://api.dicebear.com/7.x/adventurer/svg?seed=SarahMitchell",
    gender: "FEMALE",
    isActive: true,
  },
  {
    name: "Dr. James Carter",
    email: "dr.james@erasmiles.com",
    phone: "(555) 102-3311",
    speciality: "Cosmetic Dentistry",
    bio: "Specializes in smile makeovers and restorative procedures.",
    imageUrl: "https://api.dicebear.com/7.x/adventurer/svg?seed=JamesCarter",
    gender: "MALE",
    isActive: true,
  },
  {
    name: "Dr. Emily Rivera",
    email: "dr.emily@erasmiles.com",
    phone: "(555) 103-4411",
    speciality: "Orthodontics",
    bio: "Experienced in braces and aligner-based treatment plans.",
    imageUrl: "https://api.dicebear.com/7.x/adventurer/svg?seed=EmilyRivera",
    gender: "FEMALE",
    isActive: true,
  },
];

async function main() {
  for (const doctor of doctors) {
    await prisma.doctor.upsert({
      where: { email: doctor.email },
      update: {
        name: doctor.name,
        phone: doctor.phone,
        speciality: doctor.speciality,
        bio: doctor.bio,
        imageUrl: doctor.imageUrl,
        gender: doctor.gender,
        isActive: true,
      },
      create: doctor,
    });
  }

  const count = await prisma.doctor.count({ where: { isActive: true } });
  console.log(`Seed completed. Active doctors: ${count}`);
}

main()
  .catch((error) => {
    console.error("Failed to seed doctors:", error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
