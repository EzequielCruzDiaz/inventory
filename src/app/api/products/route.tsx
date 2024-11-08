import storeApi from "@/app/lib/axiosInstance";
import { NextResponse } from "next/server";

type Params = {
    { team: string }

}

export const GET = async (request: Request) => {
    const perPage = request.
  const response = await storeApi("/products");


  return Response.json();
};
