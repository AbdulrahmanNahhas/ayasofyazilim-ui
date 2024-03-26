import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import {
  BoldIcon,
  CodeIcon,
  ItalicIcon,
  StrikethroughIcon,
  UnderlineIcon,
} from 'lucide-react';
import { EditorBubbleItem, useEditor } from 'novel';
import React from 'react';
import type { SelectorItem } from './node-selector';

export const TextButtons = () => {
  const { editor: _editor } = useEditor();
  if (!_editor) return null;
  const items: SelectorItem[] = [
    {
      name: 'bold',
      isActive: (editor) => !!editor && editor.isActive('bold'),
      command: (editor) =>
        !!editor && editor.chain().focus().toggleBold().run(),
      icon: BoldIcon,
    },
    {
      name: 'italic',
      isActive: (editor) => !!editor && editor.isActive('italic'),
      command: (editor) =>
        !!editor && editor.chain().focus().toggleItalic().run(),
      icon: ItalicIcon,
    },
    {
      name: 'underline',
      isActive: (editor) => !!editor && editor.isActive('underline'),
      command: (editor) =>
        !!editor && editor.chain().focus().toggleUnderline().run(),
      icon: UnderlineIcon,
    },
    {
      name: 'strike',
      isActive: (editor) => !!editor && editor.isActive('strike'),
      command: (editor) =>
        !!editor && editor.chain().focus().toggleStrike().run(),
      icon: StrikethroughIcon,
    },
    {
      name: 'code',
      isActive: (editor) => !!editor && editor.isActive('code'),
      command: (editor) =>
        !!editor && editor.chain().focus().toggleCode().run(),
      icon: CodeIcon,
    },
  ];
  return (
    <div className="flex">
      {items.map((item) => (
        <EditorBubbleItem
          key={item.name}
          onSelect={(editor) => {
            item.command(editor);
          }}
        >
          <Button size="icon" className="rounded-none" variant="ghost">
            <item.icon
              className={cn('h-4 w-4', {
                'text-blue-500': item.isActive(_editor),
              })}
            />
          </Button>
        </EditorBubbleItem>
      ))}
    </div>
  );
};
