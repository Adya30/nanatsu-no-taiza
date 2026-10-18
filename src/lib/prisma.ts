import { PrismaClient } from "@prisma/client";

// Mencegah pembuatan multiple instance PrismaClient saat hot reloading di development mode
const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

export const prisma = globalForPrisma.prisma ?? new PrismaClient();

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma;
}

export default prisma;
