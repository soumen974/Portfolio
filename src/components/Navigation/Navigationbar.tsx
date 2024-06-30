import React from 'react'
import {FloatingNavDemo} from "../../components/FloatingNavDemo";
import { FloatingNav } from "../../components/ui/floating-navbar";
import { IconHome, IconMessage, IconUser } from "@tabler/icons-react";
import { useRouter } from 'next/router';

export default function Navigationbar() {
  
  return (
    <div>
      <FloatingNavDemo/>
    </div>
  )
}
