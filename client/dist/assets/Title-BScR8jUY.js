import{j as e,ab as i,ac as x,f as r,aw as d,B as o}from"./index-DP8FjTfo.js";function g({open:s,setOpen:t,msg:c,setMsg:a=()=>{},onClick:m=()=>{},type:l="delete",setType:u=()=>{}}){const n=()=>{u("delete"),a(null),t(!1)};return e.jsx(e.Fragment,{children:e.jsx(i,{open:s,setOpen:n,children:e.jsxs("div",{className:"py-4 w-full flex flex-col gap-4 items-center justify-center",children:[e.jsx(x.Title,{as:"h3",className:"",children:e.jsx("p",{className:r("p-3 rounded-full ",l==="restore"||l==="restoreAll"?"text-yellow-600 bg-yellow-100":"text-red-600 bg-red-200"),children:e.jsx(d,{size:60})})}),e.jsx("p",{className:"text-center text-gray-500",children:c??"Are you sure you want to delete the selected record?"}),e.jsxs("div",{className:"bg-gray-50 py-3 sm:flex sm:flex-row-reverse gap-4",children:[e.jsx(o,{type:"button",className:r(" px-8 text-sm font-semibold text-white sm:w-auto",l==="restore"||l==="restoreAll"?"bg-yellow-600":"bg-red-600 hover:bg-red-500"),onClick:m,label:l==="restore"?"Restore":"Delete"}),e.jsx(o,{type:"button",className:"bg-white px-8 text-sm font-semibold text-gray-900 sm:w-auto border",onClick:()=>n(),label:"Cancel"})]})]})})})}function f({open:s,setOpen:t,onClick:c=()=>{}}){const a=()=>{t(!1)};return e.jsx(e.Fragment,{children:e.jsx(i,{open:s,setOpen:a,children:e.jsxs("div",{className:"py-4 w-full flex flex-col gap-4 items-center justify-center",children:[e.jsx(x.Title,{as:"h3",className:"",children:e.jsx("p",{className:r("p-3 rounded-full ","text-red-600 bg-red-200"),children:e.jsx(d,{size:60})})}),e.jsx("p",{className:"text-center text-gray-500",children:"Are you sure you want to activate or deactive this account?"}),e.jsxs("div",{className:"bg-gray-50 py-3 sm:flex sm:flex-row-reverse gap-4",children:[e.jsx(o,{type:"button",className:r(" px-8 text-sm font-semibold text-white sm:w-auto","bg-red-600 hover:bg-red-500"),onClick:c,label:"Yes"}),e.jsx(o,{type:"button",className:"bg-white px-8 text-sm font-semibold text-gray-900 sm:w-auto border",onClick:()=>a(),label:"No"})]})]})})})}const h=({title:s,className:t})=>e.jsx("h2",{className:r("text-2xl font-semibold capitalize",t),children:s});export{g as C,h as T,f as U};
