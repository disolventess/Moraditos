"use client";
import type { DragEvent, ReactNode } from "react";

/** Preserve selecting/copying text, but avoid native text dragging on repeat selections. */
export default function TextSelectionGuard({ children }: { children: ReactNode }) {
  function preventTextDrag(event: DragEvent<HTMLDivElement>) {
    const selection = window.getSelection();
    const node = event.target as Node;
    const element = node instanceof Element ? node : node.parentElement;
    if (!selection || selection.isCollapsed || !element) return;
    // Preserve intentional link/image dragging and editable controls.
    if (element.closest('a, img, video, audio, input, textarea, [contenteditable], [draggable="true"]')) return;
    if (event.dataTransfer.types.includes("text/plain") && selection.containsNode(node, true)) {
      event.preventDefault();
    }
  }
  return <div onDragStartCapture={preventTextDrag}>{children}</div>;
}
