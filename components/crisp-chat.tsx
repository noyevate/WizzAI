"use client"

import {useEffect } from "react";
import { Crisp } from "crisp-sdk-web"

export const CrispChat = () => {
    useEffect(() => {
        Crisp.configure("7c556352-4ff2-4be3-a2a1-f62fb795fa55")
    }, []);
    return null
}