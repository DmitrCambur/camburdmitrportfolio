import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

const Lines = () => {
    const ref = useRef();

    useEffect(() => {
        // Define dimensions and scales
        const width = 1152;
        const height = 760;
        const marginTop = 60;
        const marginRight = 10;
        const marginBottom = 20;
        const marginLeft = 10;
        const overlap = 16;

        // Create an SVG element
        const svg = d3.select(ref.current)
            .attr("width", width)
            .attr("height", height)
            .attr("viewBox", [0, 0, width, height]);

        // Load and process the data
        d3.csv("../assets/pulsar.csv", d3.autoType).then(pulsar => {
            // Define scales based on the data
            const x = d3.scaleLinear()
                .domain(d3.extent(pulsar, d => d[0]))
                .range([marginLeft, width - marginRight]);

            const z = d3.scalePoint()
                .domain(pulsar.map(d => d[2]))
                .range([marginTop, height - marginBottom]);

            const y = d3.scaleLinear()
                .domain(d3.extent(pulsar, d => d[1]))
                .range([0, -overlap * z.step()]);

            const line = d3.line()
                .defined(d => !isNaN(d[1]))
                .x(d => x(d[0]))
                .y(d => y(d[1]));

            // Draw lines
            svg.selectAll("path")
                .data(d3.group(pulsar, d => d[2]))
                .join("path")
                .attr("transform", d => `translate(0,${z(d[0])})`)
                .attr("d", d => line(d[1]))
                .attr("fill", "none")
                .attr("stroke", "black");
        });
    }, []);

    return <svg ref={ref} style={{ width: "100%", height: "auto" }} />;
};

export default Lines;
