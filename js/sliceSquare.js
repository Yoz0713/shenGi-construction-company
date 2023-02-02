class SliceSquare {
    static i = 0

    constructor(data) {
        SliceSquare.i += 1
        this.id = `clipPath${SliceSquare.i}`;
        this.row = data.row;
        this.collumn = data.collumn;
        this.gapX = data.gapX;
        this.gapY = data.gapY;
        this.mode = data.mode
        this.squares = [];
        this.square = {
            width: 1 / data.row - (data.gapX * (data.row - 1) / data.row),
            height: 1 / data.collumn - (data.gapY * (data.collumn - 1) / data.collumn)
        }

    }

    makeSquares(target) {
        for (let i = 0; i < this.row; i++) {
            this.square.x = i * this.square.width + (i == 0 ? 0 : this.gapX * i)
            for (let j = 0; j < this.collumn; j++) {
                this.square.y = j * this.square.height + (j == 0 ? 0 : this.gapY * j)
                this.squares.push({ ...this.square })

            }

        }
        let result = this.squares.map((item, i) => {

            item = `<rect x="${item.x}" y="${item.y}" stroke="#000000" opacity="1" width="${item.width}" height="${item.height}" />`
            return item
        })

        //隨機方塊配置
        if (this.mode == "random") {
            result.sort(() => Math.random() - 0.5);
        }
        let clipPathEl = `<svg class="clipPath" viewBox="0 0 1920 634">
                    <defs>
                        <clipPath id="${this.id}" clipPathUnits="objectBoundingBox">
                            ${result.join("\n")}
                            </clipPath>
                    </defs>
            </svg>`;
        const parser = new DOMParser();
        const doc = parser.parseFromString(clipPathEl, "image/svg+xml")
        const clip = document.querySelector(".clip")
        clip.innerHTML = doc.documentElement.outerHTML;

    }
}