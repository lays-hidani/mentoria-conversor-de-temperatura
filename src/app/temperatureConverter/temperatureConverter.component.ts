import { Component, Input, OnInit } from "@angular/core";

@Component({
    selector: "temperature-converter",
    templateUrl: "./temperatureConverter.component.html",
    styleUrls: ["./temperatureConverter.component.scss"],
})
export class TemperatureConverter implements OnInit {
    public fahrenheit: number;
    public celsius: number;

    ngOnInit() {
        // C = (F − 32) × 5/9
        // F = C*9/5 + 32
    }
}
