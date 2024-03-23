'use server'

import { cookies } from "next/headers"

export const isLoggedIn = async () => cookies().has("token");