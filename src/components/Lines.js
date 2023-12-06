import React, { useEffect, useRef, useState } from 'react';
import * as d3 from 'd3';

const Lines = () => {
    const ref = useRef();
    const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

    useEffect(() => {
        // Function to draw the mountain lines
        const drawMountains = () => {
            // Clear any existing content
            d3.select(ref.current).selectAll("svg").remove();

            const { width, height } = dimensions;
            const svg = d3.select(ref.current)
                .append("svg")
                .attr("width", width)
                .attr("height", height)
                .attr("viewBox", [0, 0, width, height]);

            // Define the number of lines and the maximum mountain height
            const numberOfLines = 20;
            const maxMountainHeight = height / 2; // Adjust the maximum mountain height
            const lineMargin = 10; // Margin between lines

            // Generate mountain line data
            const mountains = Array.from({ length: numberOfLines }, (_, i) => {
                const peakHeight = Math.random() * maxMountainHeight;
                const baseLineY = height - i * lineMargin;
                return [
                    { x: 0, y: baseLineY },
                    { x: Math.random() * width, y: baseLineY - peakHeight },
                    { x: width, y: baseLineY }
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

            // Event listener for mouse movement to adjust the peak
            svg.on("mousemove", function(event) {
                const mousePosition = d3.pointer(event);
                const mouseX = mousePosition[0];

                // Update the lines based on mouse X position
                svg.selectAll("path").data(mountains).attr("d", d => {
                    const middleIndex = Math.floor(d.length / 2);
                    d[middleIndex].x = mouseX;
                    return d3.line().x(d => d.x).y(d => d.y)(d);
                });
            });
        };

        // Set up a resize observer to update dimensions
        const resizeObserver = new ResizeObserver(entries => {
            if (!entries || entries.length === 0) {
                return;
            }
            setDimensions({
                width: entries[0].contentRect.width,
                height: entries[0].contentRect.height
            });
        });

        // Start observing for resize
        resizeObserver.observe(ref.current);

        // Clean up on unmount
        return () => {
            resizeObserver.disconnect();
        };
    }, []);

    // Redraw the mountains whenever the dimensions change
    useEffect(() => {
        if (dimensions.width && dimensions.height) {
            drawMountains();
        }
    }, [dimensions]);

    return <div ref={ref} className="lines-container" style={{ width: '100%', height: '100%' }} />;
};

export default Lines;
