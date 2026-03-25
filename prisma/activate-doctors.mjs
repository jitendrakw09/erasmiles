import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const result = await prisma.doctor.updateMany({
    data: { isActive: true },
  });

  const activeCount = await prisma.doctor.count({ where: { isActive: true } });

  console.log(
    `Activated doctors: ${result.count}. Total active doctors now: ${activeCount}`,
  );
}

main()
  .catch((error) => {
    console.error("Failed to activate doctors:", error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
