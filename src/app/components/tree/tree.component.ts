import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-tree",
  templateUrl: "./tree.component.html",
  styleUrls: ["./tree.component.scss"]
})
export class TreeComponent implements OnInit {
  canvas: any;
  ctx: any;

  cir1: any;
  cir2: any;
  cir3: any;
  svg1: any;
  svg2: any;

  shape: any;

  constructor() {
    this.canvas = "";
  }

  ngOnInit() {
    // this.canvas = document.getElementById("tutorial");

    // if (this.canvas.getContext) {
    //   this.ctx = this.canvas.getContext("2d");
    //   // drawing code here
    //   this.ctx.fillStyle = "rgb(200, 0, 0)";
    //   this.ctx.fillRect(10, 10, 50, 50);

    //   this.ctx.fillStyle = "rgba(0, 0, 200, 0.5)";
    //   this.ctx.strokeRect(30, 30, 50, 50);
    //   this.ctx.clearRect(50, 50, 50, 50);

    //   this.ctx.beginPath();
    //   this.ctx.moveTo(25, 50);
    //   this.ctx.lineTo(100, 75);
    //   this.ctx.lineTo(100, 25);
    //   this.ctx.fill();

    this.svg1 = document.createElementNS("http://www.w3.org/2000/svg", "svg");

    // set width and height
    this.svg1.setAttribute("width", "500");
    this.svg1.setAttribute("height", "500");

    // create a circle
    this.cir1 = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "circle"
    );
    this.cir1.setAttribute("cx", "30");
    this.cir1.setAttribute("cy", "30");
    this.cir1.setAttribute("r", "30");
    this.cir1.setAttribute("fill", "red");

    this.cir2 = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "ellipse"
    );

    this.cir3 = document.createElementNS("http://www.w3.org/2000/svg", "path");

    this.cir2.setAttribute("cx", "200");
    this.cir2.setAttribute("cy", "250");
    this.cir2.setAttribute("rx", "30");
    this.cir2.setAttribute("ry", "20");
    this.cir2.setAttribute("pathlength", "100");
    this.cir2.setAttribute("fill", "none");
    this.cir2.setAttribute("stroke", "green");
    this.cir2.setAttribute("stroke-width", "5");

    this.cir3.setAttribute("d", "M 30 30 C 100 100, 375 100, 510 10");
    this.cir3.setAttribute("stroke", "black");
    this.cir3.setAttribute("stroke-width", "7");
    this.cir3.setAttribute("stroke-linecap", "round");
    this.cir3.setAttribute("fill", "transparent");
    // attach it to the container
    this.svg1.appendChild(this.cir1);
    this.svg1.appendChild(this.cir2);
    this.svg1.appendChild(this.cir3);

    // attach container to document
    document.getElementById("svg54583").appendChild(this.svg1);
    // } else {
    //   // canvas-unsupported code here
    // }
  }
}
