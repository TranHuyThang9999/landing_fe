"use client"

import type React from "react"
import { useState, useEffect } from "react"

interface CarouselProps {
    urls: string[]
    interval?: number // Time in milliseconds between slide transitions
}

const AutoCarousel: React.FC<CarouselProps> = ({ urls, interval = 3000 }) => {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [direction, setDirection] = useState<'left' | 'right'>('right')

    const nextSlide = () => {
        setDirection('right')
        setCurrentIndex((prevIndex) => (prevIndex + 1) % urls.length)
    }

    const prevSlide = () => {
        setDirection('left')
        setCurrentIndex((prevIndex) => (prevIndex - 1 + urls.length) % urls.length)
    }

    const goToSlide = (index: number) => {
        setDirection(index > currentIndex ? 'right' : 'left')
        setCurrentIndex(index)
    }

    useEffect(() => {
        const timer = setInterval(nextSlide, interval)
        return () => clearInterval(timer)
    }, [interval])

    return (
        <div className="relative w-full overflow-hidden">
            {/* Carousel wrapper */}
            <div className="relative h-56 md:h-96 overflow-hidden rounded-lg">
                {urls.map((url, index) => (
                    <div
                        key={index}
                        className={`
                            absolute inset-0 w-full h-full transition-all duration-150 ease-in-out
                            ${index === currentIndex
                            ? 'opacity-100 translate-x-0 z-10'
                            : direction === 'right'
                                ? (index === (currentIndex + 1) % urls.length
                                    ? 'translate-x-full opacity-0 z-0'
                                    : 'translate-x-[-100%] opacity-0 z-0')
                                : (index === (currentIndex - 1 + urls.length) % urls.length
                                    ? 'translate-x-[-100%] opacity-0 z-0'
                                    : 'translate-x-full opacity-0 z-0')
                        }
                        `}
                    >
                        <img
                            src={url || "/placeholder.svg"}
                            className="absolute block w-full h-full object-cover"
                            alt={`Slide ${index + 1}`}
                        />
                    </div>
                ))}
            </div>

            {/* Slider indicators */}
            <div className="absolute z-20 flex -translate-x-1/2 space-x-3 rtl:space-x-reverse bottom-5 left-1/2">
                {urls.map((_, index) => (
                    <button
                        key={index}
                        type="button"
                        className={`
                            w-3 h-3 rounded-full transition-all duration-300
                            ${index === currentIndex
                            ? "bg-white scale-125"
                            : "bg-white/50 hover:bg-white hover:scale-110"
                        }
                        `}
                        aria-current={index === currentIndex ? "true" : "false"}
                        aria-label={`Slide ${index + 1}`}
                        onClick={() => goToSlide(index)}
                    ></button>
                ))}
            </div>

            <button
                type="button"
                className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                onClick={prevSlide}
            >
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                    <svg
                        className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 6 10"
                    >
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4" />
                    </svg>
                    <span className="sr-only">Previous</span>
                </span>
            </button>
            <button
                type="button"
                className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                onClick={nextSlide}
            >
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                    <svg
                        className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 6 10"
                    >
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
                    </svg>
                    <span className="sr-only">Next</span>
                </span>
            </button>
        </div>
    )
}

export default AutoCarousel