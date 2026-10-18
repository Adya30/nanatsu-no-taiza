"use server";

import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";

// Mengambil semua user dari database
export async function getUsers() {
  try {
    return await prisma.user.findMany({
      orderBy: { createdAt: "desc" },
    });
  } catch (error) {
    console.error("Gagal mengambil data user:", error);
    return [];
  }
}

// Menambahkan user baru ke database
export async function createUser(formData: FormData) {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;

  if (!name || !email) {
    throw new Error("Nama dan Email wajib diisi");
  }

  try {
    await prisma.user.create({
      data: {
        name,
        email,
      },
    });

    // Refresh halaman agar data terbaru langsung muncul
    revalidatePath("/");
  } catch (error) {
    console.error("Gagal menambahkan user:", error);
    throw error;
  }
}

// Menghapus user berdasarkan ID
export async function deleteUser(id: number) {
  try {
    await prisma.user.delete({
      where: { id },
    });

    revalidatePath("/");
  } catch (error) {
    console.error("Gagal menghapus user:", error);
    throw error;
  }
}
