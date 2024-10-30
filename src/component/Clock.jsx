// Clock.jsx
import React, { useEffect, useState } from 'react';
import './Clock.css';

const Clock = () => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);

    const seconds = time.getSeconds();
    const minutes = time.getMinutes();
    const hours = time.getHours();

    // Calculate rotation angles
    const secondDegrees = (seconds / 60) * 360;
    const minuteDegrees = (minutes / 60) * 360 + (seconds / 60) * 6;
    const hourDegrees = (hours % 12 / 12) * 360 + (minutes / 60) * 30;

    return (
        <div className="clock-container">
            <div className="clock">
                <div className="clock-face">
                    <div className="hand hour-hand" style={{ transform: `rotate(${hourDegrees}deg)` }} />
                    <div className="hand minute-hand" style={{ transform: `rotate(${minuteDegrees}deg)` }} />
                    <div className="hand second-hand" style={{ transform: `rotate(${secondDegrees}deg)` }} />

                    {[...Array(12)].map((_, i) => {
                        const angle = (i + 1) * 30;
                        const x = 50 + 40 * Math.cos((angle - 90) * (Math.PI / 180));
                        const y = 50 + 40 * Math.sin((angle - 90) * (Math.PI / 180));

                        return (
                            <div
                                key={i}
                                className="hour-number"
                                style={{
                                    left: `${x}%`,
                                    top: `${y}%`,
                                    transform: `translate(-50%, -50%)`,
                                }}
                            >
                                {i === 0 ? 1 : i + 1}
                            </div>
                        );
                    })}

                    {/* Second markers as dots */}
                    {[...Array(60)].map((_, i) => {
                        const angle = i * 6;
                        const x = 50 + 46 * Math.cos((angle - 90) * (Math.PI / 180));
                        const y = 50 + 46 * Math.sin((angle - 90) * (Math.PI / 180));

                        return (
                            <div
                                key={i}
                                className="second-marker"
                                style={{
                                    left: `${x}%`,
                                    top: `${y}%`,
                                    transform: `translate(-50%, -50%)`,
                                }}
                            />
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Clock;
