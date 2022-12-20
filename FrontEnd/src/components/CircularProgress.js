import React from 'react'

const CircularProgress = ({ percentage, radius = 48 }) => {
    const circumference = 2 * radius * 22 / 7;
    const strokeWidth = radius * 0.08;

    return (
        <div style={{
            display: "inline-flex",
            fontSize: "1.5rem",
            lineHeight: "2rem",
            justifyContent: "center",
            alignItems: "center",
        }}>
            <svg style={{
                transform: "rotate(-90deg)",
                width: "12rem",
                height: "12rem",
                color: "#000"
            }}>
                <circle cx="95" cy="95" r={radius} stroke="#ccc" stroke-width={strokeWidth} fill="transparent" />
                <circle cx="95" cy="95" r={radius} stroke="#000" stroke-width={strokeWidth * 2.5} fill="transparent" stroke-dasharray={circumference} stroke-dashoffset={circumference - percentage / 100 * circumference} />
            </svg>
            <span style={{ position: "absolute" }}>{percentage}%</span>
        </div>

    );
}

export default CircularProgress;

