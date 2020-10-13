import React from 'react';
import Hello, { IsLoading } from '../app/src/components/Hello';
import BasicHC from '../app/src/Charts/BasicHC'

// import '../app/src/App.css'
// import '../app/src/Styles/main.scss'

export default {
    title: 'NCBC CMP REPO/Charts',
    // component: Hello,
    component: BasicHC,
  }

//   export function HelloJoe() {
//     return (
//       <Hello name="Jo Doe" />
//     )
//   }

//   export function TestUser() {
//     return (
//         <Hello name="Test User" />
//     )
// }

// export function NotLoading() {
//     return (
//         <IsLoading loading={false}/>
//     )
// }

// export function Loading() {
//     return (
//         <IsLoading loading={true} />
//     )
// }

export function HighChart(){
  return(
    <BasicHC  />
  )
}