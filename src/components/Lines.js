import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

const Lines = () => {
    const ref = useRef();

    useEffect(() => {
        const drawMountains = (width, height) => {
            // Clear any existing content
            d3.select(ref.current).selectAll("svg").remove();

            const svg = d3.select(ref.current)
                .append("svg")
                .attr("width", width)
                .attr("height", height)
                .attr("viewBox", [0, 0, width, height]);

            // Define the number of lines and the maximum mountain height
            const numberOfLines = 20;
            const maxMountainHeight = height / (1 * numberOfLines); // Reduced height
            const peakDistance = width / 3; // The distance between peaks
            const lineMargin = maxMountainHeight / 100; // Margin between lines

            // Generate mountain line data
            const mountains = Array.from({ length: numberOfLines }, (_, i) => {
                const peakHeight = (numberOfLines - i) * (maxMountainHeight - lineMargin) / numberOfLines;
                const baseLineY = height - i * (maxMountainHeight - lineMargin / 2);
                return [
                    { x: 0, y: baseLineY }, // start at left
                    { x: width / 3 - peakDistance / 2, y: baseLineY }, // before peak
                    { x: width / 3, y: baseLineY - peakHeight }, // peak
                    { x: width / 3 + peakDistance / 2, y: baseLineY }, // after peak
                    { x: width, y: baseLineY } // end at right
                ];
            });

            // Draw the lines
            svg.selectAll("path")
                .data(mountains)
                .join("path")
                .attr("d", d3.line().x(d => d.x).y(d => d.y))
                .attr("fill", "none")
                .attr("stroke", "black")
                .attr("stroke-width", 1)
                .attr("stroke-linecap", "round");
        };

        // Set up a resize observer to redraw the chart when the container size changes
        const resizeObserver = new ResizeObserver(entries => {
            if (!entries || entries.length === 0) {
                return;
            }
            const { width, height } = entries[0].contentRect;
            drawMountains(width, height);
        });

        // Observe the ref element for size changes
        resizeObserver.observe(ref.current);

        // Clean up the observer on component unmount
        return () => resizeObserver.disconnect();
    }, []);

    return <div ref={ref} className="lines-container" style={{ width: '100%', height: '100%' }} />;
};

export default Lines;
