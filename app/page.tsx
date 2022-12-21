'use client'

import Link from "next/link"
import Template1 from "./Template1/page"
import { useRouter } from 'next/navigation';
import { useState } from "react";

export default function Home() {

  const router = useRouter();
  const [selectedTemplate, setSelectedTemplate] = useState("Template1");

  const onSelectChange = (e) => {
    const locale = e.target.value;
    console.log(locale);
    setSelectedTemplate(locale);

  }

  const onSubmitTemplate = (e) => {
    e.preventDefault();
    console.log(router.asPath);
    router.push(selectedTemplate, { scroll: false })
  }

  return (
    <>
      <div className="flex h-screen bg-gradient-to-t from-slate-900 via-purple-900 to-slate-900">
        <div className="m-auto">
          <h1 className="text-white font-bold text-center text-6xl font-mono">Free Templates</h1>
          <form className="text-center pt-10 flex flex-col" onSubmit={onSubmitTemplate}>
            <select className="p-2 text-center rounded-md" name="templates" id="template-select" onChange={onSelectChange} defaultValue={selectedTemplate}>
              <option defaultValue value="Template1">First Template</option>
              <option value="Template2">Template 2</option>
              <option value="Template3">Template 3</option>
            </select>
            <button type="submit" className="w-1/2 mx-auto bg-gradient-to-r from-sky-400 to-blue-500 mt-10 p-1 rounded-lg text-2xl text-white font-bold">Go!</button>
          </form>
        </div>
      </div>
    </>
  )
}
