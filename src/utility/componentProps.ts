import React from "react"

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

export interface TextAreaProps
    extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

export interface TabProps {
    children: React.ReactNode,
    className?: String,
    active?: boolean,
    as?: "button"|"div",
}

export interface MainProps {
    children: React.ReactNode,
    className?: string,
    isOverflowHidden?: boolean,
    border?: string
}