'use client';

import React, { useState, useRef, JSX } from "react";

export default function TextHighlighter() {
    const [text] = useState("Đây là đoạn văn mẫu. Bạn có thể chọn một đoạn để đánh dấu.");
    const [highlights, setHighlights] = useState<{ start: number; end: number; color: string }[]>([]);
    const [showColorPicker, setShowColorPicker] = useState(false);
    const [selectionRange, setSelectionRange] = useState<{ start: number; end: number } | null>(null);
    const [popupPosition, setPopupPosition] = useState<{ x: number; y: number } | null>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    const saveHighlightsToLocalStorage = (newHighlights: { start: number; end: number; color: string }[]) => {
        localStorage.setItem("textHighlights", JSON.stringify(newHighlights));
    };

    const loadHighlightsFromLocalStorage = () => {
        const savedHighlights = localStorage.getItem("textHighlights");
        if (savedHighlights) {
            setHighlights(JSON.parse(savedHighlights));
        }
    };

    const handleTextSelect = (event: React.MouseEvent) => {
        const selection = window.getSelection();
        if (!selection || !selection.toString()) return;

        const startIndex = selection.anchorOffset;
        const endIndex = selection.focusOffset;

        if (startIndex !== endIndex) {
            setSelectionRange({
                start: Math.min(startIndex, endIndex),
                end: Math.max(startIndex, endIndex),
            });

            const rect = (event.target as HTMLElement).getBoundingClientRect();
            setPopupPosition({
                x: event.clientX - rect.left,
                y: event.clientY - rect.top,
            });

            setShowColorPicker(true);
        }
    };

    const handleColorSelect = (color: string) => {
        if (selectionRange) {
            const newHighlight = { ...selectionRange, color };
            const updatedHighlights = [...highlights, newHighlight];
            setHighlights(updatedHighlights);
            saveHighlightsToLocalStorage(updatedHighlights);
        }

        setShowColorPicker(false);
        setSelectionRange(null);
    };

    const renderHighlightedText = () => {
        if (highlights.length === 0) return text;

        const highlightedText: JSX.Element[] = [];
        let currentIndex = 0;

        highlights.sort((a, b) => a.start - b.start).forEach((highlight, index) => {
            if (currentIndex < highlight.start) {
                highlightedText.push(
                    <span key={`normal-${index}-${currentIndex}`}>
                        {text.slice(currentIndex, highlight.start)}
                    </span>
                );
            }

            highlightedText.push(
                <span
                    key={`highlight-${index}`}
                    style={{ backgroundColor: highlight.color, fontWeight: "bold" }}
                >
                    {text.slice(highlight.start, highlight.end)}
                </span>
            );

            currentIndex = highlight.end;
        });

        if (currentIndex < text.length) {
            highlightedText.push(
                <span key={`normal-last`}>{text.slice(currentIndex)}</span>
            );
        }

        return highlightedText;
    };

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">Đánh dấu đoạn văn bản với màu sắc</h1>

            <div
                ref={containerRef}
                className="border p-4 rounded-md cursor-text relative"
                onMouseUp={handleTextSelect}
                style={{ lineHeight: "1.6", fontSize: "18px" }}
            >
                {renderHighlightedText()}

                {/* Hiển thị popup menu chọn màu */}
                {showColorPicker && popupPosition && (
                    <div
                        className="absolute"
                        style={{
                            top: popupPosition.y,
                            left: popupPosition.x,
                            background: "white",
                            border: "1px solid #ccc",
                            borderRadius: "4px",
                            padding: "8px",
                            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                        }}
                    >
                        <div className="flex gap-2">
                            {["yellow", "pink", "lightblue", "lightgreen", "orange"].map((color) => (
                                <div
                                    key={color}
                                    onClick={() => handleColorSelect(color)}
                                    style={{
                                        backgroundColor: color,
                                        width: "20px",
                                        height: "20px",
                                        borderRadius: "50%",
                                        cursor: "pointer",
                                    }}
                                />
                            ))}
                        </div>
                    </div>
                )}
            </div>

            {/* Nút để tải lại highlight từ localStorage */}
            <button
                className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                onClick={loadHighlightsFromLocalStorage}
            >
                Lưu highlight vào localStorage
            </button>
        </div>
    );
}
