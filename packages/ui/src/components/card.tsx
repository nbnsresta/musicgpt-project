import React from "react";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export const Card = ({ children, className = "", ...props }: CardProps) => {
  const classes = `rounded-lg border bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 shadow-sm ${className}`;

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
};

export interface CardHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export const CardHeader = ({
  children,
  className = "",
  ...props
}: CardHeaderProps) => {
  const classes = `flex flex-col space-y-1.5 p-6 ${className}`;

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
};

export interface CardContentProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export const CardContent = ({
  children,
  className = "",
  ...props
}: CardContentProps) => {
  const classes = `p-6 pt-0 ${className}`;

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
};
