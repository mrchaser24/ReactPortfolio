"use client"
import React, { useState, useEffect, useRef } from 'react'

export default function useAbout() {
    const [title, setTitle] = useState<string>('Hello title')

    return {
        title,

        setTitle
    }
}