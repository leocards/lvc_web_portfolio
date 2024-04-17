import React from "react"

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

export interface TextAreaProps
    extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

export interface TabProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>, React.HTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode,
    className?: string,
    active?: boolean,
    as?: "button"|"div",
}

export interface MainProps 
    extends React.HTMLAttributes<HTMLElement> {
        children: React.ReactNode,
        className?: string,
        isOverflowHidden?: boolean|string,
        border?: string,
        titleChildren?: React.ReactNode
}