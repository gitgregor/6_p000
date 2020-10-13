import React from 'react';
import Hello, { IsLoading } from '../components/Hello';

export default {
    title: 'Hello Story',
    component: Hello
  }

  export function HelloJoe() {
    return (
      <Hello name="Jo Doe" />
    )
  }

  export function TestUser() {
    return (
        <Hello name="Test User" />
    )
}

export function NotLoading() {
    return (
        <IsLoading loading={false}/>
    )
}

export function Loading() {
    return (
        <IsLoading loading={true} />
    )
}