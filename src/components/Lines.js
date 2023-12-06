import React, { useEffect, useRef, useState } from 'react';
import * as d3 from 'd3';

const Lines = () => {
    const ref = useRef();
    const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
    let lastMouseX = 0; // Track the last mouse X position

    // Function to generate mountain line data
    const generateMountains = (numberOfLines, maxMountainHeight, lineMargin, width, height) => {
        return Array.from({ length: numberOfLines }, (_, i) => {
            const peakHeight = Math.random() * maxMountainHeight;
            const baseLineY = height - i * lineMargin; // Spread lines evenly
            return [
                { x: 0, y: baseLineY },
                { x: lastMouseX, y: baseLineY - peakHeight },
                { x: width, y: baseLineY }
            ];
        });
    };

    // Function to draw the mountain lines
    const drawMountains = (width, height) => {
        const numberOfLines = 20;
        const maxMountainHeight = height / 4; 
        const lineMargin = 10; // Adjust line margin for even spread
        const mountains = generateMountains(numberOfLines, maxMountainHeight, lineMargin, width, height);

        let svg = d3.select(ref.current).select("svg");
        if (svg.empty()) {
            svg = d3.select(ref.current)
                .append("svg")
                .attr("width", width)
                .attr("height", height)
                .attr("viewBox", [0, 0, width, height]);
        }

        svg.selectAll("path")
            .data(mountains)
            .join("path")
            .attr("d", d3.line().x(d => d.x).y(d => d.y))
            .attr("fill", "none")
            .attr("stroke", "black")
            .attr("stroke-width", 1)
            .attr("stroke-linecap", "round");

        // Function to update line peaks based on mouse position with a transition
        const updateLinePeaks = (mouseX) => {
            lastMouseX = mouseX;
            const updatedMountains = generateMountains(numberOfLines, maxMountainHeight, lineMargin, width, height);
            svg.selectAll("path")
                .data(updatedMountains)
                .transition()
                .duration(800)
                .attr("d", d3.line().x(d => d.x).y(d => d.y));
        };

        // Event handler for mouse movement
        const handleMouseMove = (event) => {
            const mousePosition = d3.pointer(event);
            const mouseX = mousePosition[0];
            updateLinePeaks(mouseX);
        };

        // Attach event listener to window
        d3.select(window).on("mousemove", handleMouseMove);
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
    useEffect(() => {
        resizeObserver.observe(ref.current);

        // Clean up on unmount
        return () => {
            resizeObserver.disconnect();
            d3.select(window).on("mousemove", null);
        };
    }, []);

    // Redraw the mountains whenever the dimensions change
    useEffect(() => {
        if (dimensions.width && dimensions.height) {
            drawMountains(dimensions.width, dimensions.height);
        }
    }, [dimensions]);

    return <div ref={ref} className="lines-container" style={{ width: '100%', height: '100%' }} />;
};

export default Lines;
