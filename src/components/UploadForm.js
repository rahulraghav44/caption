"use client";

import axios from "axios";
import { useState } from "react";
import UploadIcon from "./UploadIcon";
import { useRouter } from "next/navigation";

export default function UploadForm() {
  const [isUploading, setIsUploading] = useState(false);
  const router= useRouter();


  async function upload(ev) {
    ev.preventDefault();
    const files = ev.target.files;
    if (files.length > 0) {
      const file = files[0];
    
      setIsUploading(true);
      const res = await axios.postForm('/api/upload',{
        file,
      });
      setIsUploading(true);
      const newName=res.data.newName;
      router.push('/' + newName);
      // console.log(res.data);
    }
  }
  return (
    <>
      {isUploading && (
        <div className="bg-black/90 text-white fixed inset-0 flex items-center">
          <div className="w-full text-center">
            <h2 className="text-4xl mb-4">Uploading...</h2>
            <h3 className="text-xl">please wait</h3>
          </div>
        </div>
      )}
      <label className="bg-green-600 py-2 px-6 rounded-full inline-flex gap-2 border-2 boarder-purple-700/50">
        <UploadIcon />
        <span> Choose file</span>
        <input onChange={upload} type="file" className="hidden"></input>
      </label>
    </>
  );
}
