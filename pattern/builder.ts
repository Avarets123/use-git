const enum ImageFormat {
    Png = 'png',
    Jpeg = 'jpeg'
};


interface IResolution {
    width: number;
    height: number;
}

interface IImageConversion extends IResolution {
    format: ImageFormat;
}


class ImageBuilder {
    private format: ImageFormat[] = [];
    private resolutions: IResolution[] = [];

    addPng() {
        if (this.format.includes(ImageFormat.Png)) {
            return this;
        }
        this.format.push(ImageFormat.Png);
        return this;
    }

    addJpeg() {
        if (this.format.includes(ImageFormat.Jpeg)) {
            return this;
        }
        this.format.push(ImageFormat.Jpeg);
        return this;
    }

    addResolutions(width: number, height: number) {
        this.resolutions.push({ width, height });
        return this;
    }

    build(): IImageConversion[] {
        const res: IImageConversion[] = [];

        for (const r of this.resolutions) {

            for (const f of this.format) {
                res.push({
                    format: f,
                    height: r.height,
                    width: r.width
                });
            }
        }

        return res;
    }
}


console.log(new ImageBuilder().addJpeg().addResolutions(100, 50).build())