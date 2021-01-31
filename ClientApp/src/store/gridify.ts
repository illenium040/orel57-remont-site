import $ from 'jquery';

const imagesLoaded = function (conatiner: any, cb: any) {
    let images = conatiner.find('img');
    let count = images.length;
    if (count == 0) cb();
    for (let i = 0, length = images.length; i < length; i++) {
        let image = new Image();
        image.onload = image.onerror = function (e) {
            count--;
            if (count == 0) cb();
        };
        image.src = images[i].src;
    }
};
// tslint:disable:variable-name
export function gridify(container: any, optionsInput: any) {
    let $this = container,
        options = optionsInput || {},
        indexOfSmallest = function (a) {
            let lowest = 0;
            for (let i = 1, length = a.length; i < length; i++) {
                if (a[i] < a[lowest]) lowest = i;
            }
            return lowest;
        },
        render = function () {
            $this.css('position', 'relative');
            let items = $this.find(options.srcNode),
                transition = (options.transition || 'all 0.5s ease') + ', height 0, width 0',
                width = $this.innerWidth(),
                item_margin = parseInt(options.margin || 0),
                item_width = parseInt(options.max_width || options.width || 220),
                column_count = Math.max(Math.floor(width! / (item_width + item_margin)), 1),
                left = column_count == 1 ? item_margin / 2 : (width! % (item_width + item_margin)) / 2,
                columns = [];

            if (options.max_width) {
                column_count = Math.ceil(width! / (item_width + item_margin));
                item_width = (width! - column_count * item_margin - item_margin) / column_count;
                left = item_margin / 2;
            }

            for (let i = 0; i < column_count; i++) {
                columns.push(0);
            }

            for (let i = 0, length = items.length; i < length; i++) {
                let $item = $(items[i]),
                    idx = indexOfSmallest(columns);
                $item.css({
                    width: item_width,
                    position: 'absolute',
                    margin: item_margin / 2,
                    top: columns[idx] + item_margin / 2,
                    left: (item_width + item_margin) * idx + left,
                    transition: transition
                });
                columns[idx] += $item.innerHeight()! + item_margin;
            }
        };

    imagesLoaded(container, render);
    if (options.resizable) {
        let resize = $(window).bind("resize", render);
        $this.on('remove', resize.unbind);
    }
}