'use client';

import { getMDXComponent } from 'mdx-bundler/client';
import { useMemo } from 'react';

interface MDXContentProps {
  code: string;
}

export default function MDXContent({ code }: MDXContentProps) {
  const Component = useMemo(() => getMDXComponent(code), [code]);
  return (
  <div className="prose prose-lg dark:prose-invert max-w-none prose-headings:font-heading prose-headings:font-medium prose-blockquote:font-normal prose-blockquote:italic prose-p:font-body prose-li:font-body">
      <Component />
    </div>
  );
}
