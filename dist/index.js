'use strict';
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_with_holes(arr) {
    if (Array.isArray(arr)) return arr;
}
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _iterable_to_array_limit(arr, i) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _s, _e;
    try {
        for(_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true){
            _arr.push(_s.value);
            if (i && _arr.length === i) break;
        }
    } catch (err) {
        _d = true;
        _e = err;
    } finally{
        try {
            if (!_n && _i["return"] != null) _i["return"]();
        } finally{
            if (_d) throw _e;
        }
    }
    return _arr;
}
function _non_iterable_rest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _object_spread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            _define_property(target, key, source[key]);
        });
    }
    return target;
}
function _object_without_properties(source, excluded) {
    if (source == null) return {};
    var target = _object_without_properties_loose(source, excluded);
    var key, i;
    if (Object.getOwnPropertySymbols) {
        var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
        for(i = 0; i < sourceSymbolKeys.length; i++){
            key = sourceSymbolKeys[i];
            if (excluded.indexOf(key) >= 0) continue;
            if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
            target[key] = source[key];
        }
    }
    return target;
}
function _object_without_properties_loose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;
    for(i = 0; i < sourceKeys.length; i++){
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        target[key] = source[key];
    }
    return target;
}
function _sliced_to_array(arr, i) {
    return _array_with_holes(arr) || _iterable_to_array_limit(arr, i) || _unsupported_iterable_to_array(arr, i) || _non_iterable_rest();
}
function _unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _array_like_to_array(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array(o, minLen);
}
Object.defineProperty(exports, '__esModule', {
    value: true
});
var React10 = require('react');
var classVarianceAuthority = require('class-variance-authority');
var clsx = require('clsx');
var tailwindMerge = require('tailwind-merge');
var fa6 = require('react-icons/fa6');
var fa = require('react-icons/fa');
function _interopDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}
var React10__default = /*#__PURE__*/ _interopDefault(React10);
// src/ui/components/Button.tsx
function cn() {
    for(var _len = arguments.length, inputs = new Array(_len), _key = 0; _key < _len; _key++){
        inputs[_key] = arguments[_key];
    }
    return tailwindMerge.twMerge(clsx.clsx(inputs));
}
// src/ui/components/Button.tsx
var buttonVariants = classVarianceAuthority.cva("inline-flex items-center justify-center rounded-md text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none", {
    variants: {
        variant: {
            solid: "",
            outline: "border-2",
            ghost: "hover:bg-opacity-10",
            link: "underline-offset-4 hover:underline"
        },
        color: {
            default: "bg-white text-gray-800 border border-gray-200 hover:bg-gray-50 focus-visible:ring-gray-300",
            primary: "bg-blue-600 text-white hover:bg-blue-700 focus-visible:ring-blue-500",
            secondary: "bg-gray-600 text-white hover:bg-gray-700 focus-visible:ring-gray-500",
            danger: "bg-red-600 text-white hover:bg-red-700 focus-visible:ring-red-500",
            success: "bg-green-600 text-white hover:bg-green-700 focus-visible:ring-green-500",
            warning: "bg-yellow-500 text-white hover:bg-yellow-600 focus-visible:ring-yellow-400"
        },
        size: {
            xs: "h-7 px-2 text-xs",
            sm: "h-8 px-3 text-sm",
            md: "h-9 px-4 text-base",
            lg: "h-10 px-6 text-lg",
            xl: "h-12 px-8 text-xl"
        },
        fullWidth: {
            true: "w-full",
            false: ""
        }
    },
    defaultVariants: {
        variant: "solid",
        color: "default",
        size: "md",
        fullWidth: false
    }
});
var Button = React10.forwardRef(function(_param, ref) {
    var children = _param.children, className = _param.className, variant = _param.variant, color = _param.color, size = _param.size, fullWidth = _param.fullWidth, loading = _param.loading, disabled = _param.disabled, props = _object_without_properties(_param, [
        "children",
        "className",
        "variant",
        "color",
        "size",
        "fullWidth",
        "loading",
        "disabled"
    ]);
    return /* @__PURE__ */ React10__default.default.createElement("button", _object_spread({
        className: cn(buttonVariants({
            variant: variant,
            color: color,
            size: size,
            fullWidth: fullWidth
        }), className),
        ref: ref,
        disabled: disabled || loading
    }, props), loading ? /* @__PURE__ */ React10__default.default.createElement("div", {
        className: "flex items-center gap-2"
    }, children) : children);
});
Button.displayName = "Button";
var inputVariants = classVarianceAuthority.cva("flex w-full rounded-md border text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50", {
    variants: {
        variant: {
            default: "border-gray-200",
            error: "border-red-500",
            success: "border-green-500"
        },
        size: {
            sm: "h-8 px-3 text-xs",
            md: "h-10 px-4 text-sm",
            lg: "h-12 px-6 text-base"
        },
        fullWidth: {
            true: "w-full",
            false: "w-auto"
        }
    },
    compoundVariants: [
        {
            variant: "default",
            className: "hover:border-gray-300 focus-visible:ring-blue-500"
        },
        {
            variant: "error",
            className: "hover:border-red-600 focus-visible:ring-red-500 text-red-600 placeholder:text-red-400"
        },
        {
            variant: "success",
            className: "hover:border-green-600 focus-visible:ring-green-500 text-green-600 placeholder:text-green-400"
        }
    ],
    defaultVariants: {
        variant: "default",
        size: "md",
        fullWidth: true
    }
});
var Input = React10.forwardRef(function(_param, ref) {
    var className = _param.className, variant = _param.variant, size = _param.size, fullWidth = _param.fullWidth, label = _param.label, helperText = _param.helperText, error = _param.error, success = _param.success, startIcon = _param.startIcon, endIcon = _param.endIcon, disabled = _param.disabled, props = _object_without_properties(_param, [
        "className",
        "variant",
        "size",
        "fullWidth",
        "label",
        "helperText",
        "error",
        "success",
        "startIcon",
        "endIcon",
        "disabled"
    ]);
    var inputVariant = error ? "error" : success ? "success" : variant;
    return /* @__PURE__ */ React10__default.default.createElement("div", {
        className: "space-y-1"
    }, label && /* @__PURE__ */ React10__default.default.createElement("label", {
        className: "text-sm font-medium text-gray-700"
    }, label), /* @__PURE__ */ React10__default.default.createElement("div", {
        className: "relative"
    }, startIcon && /* @__PURE__ */ React10__default.default.createElement("div", {
        className: "absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"
    }, startIcon), /* @__PURE__ */ React10__default.default.createElement("input", _object_spread({
        className: cn(inputVariants({
            variant: inputVariant,
            size: size,
            fullWidth: fullWidth
        }), startIcon && "pl-10", endIcon && "pr-10", className),
        ref: ref,
        disabled: disabled
    }, props)), endIcon && /* @__PURE__ */ React10__default.default.createElement("div", {
        className: "absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
    }, endIcon)), (helperText || error || success) && /* @__PURE__ */ React10__default.default.createElement("p", {
        className: cn("text-xs", error && "text-red-600", success && "text-green-600", !error && !success && "text-gray-500")
    }, error || success || helperText));
});
Input.displayName = "Input";
var badgeVariants = classVarianceAuthority.cva("inline-flex items-center justify-center rounded-full font-medium text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2", {
    variants: {
        variant: {
            solid: "text-white",
            outline: "border border-gray-300",
            ghost: "text-gray-600",
            glass: "bg-opacity-75 backdrop-blur-md text-white border-2 border-white/50"
        },
        color: {
            default: "bg-white text-gray-800",
            black: "bg-black text-white",
            danger: "bg-red-600 text-white",
            success: "bg-green-500 text-white",
            warning: "bg-yellow-500 text-white",
            violet: "bg-violet-400 text-white"
        },
        size: {
            sm: "h-6 px-3 text-xs",
            md: "h-6 px-4 text-sm",
            lg: "h-8 px-5 text-base"
        }
    },
    defaultVariants: {
        variant: "solid",
        color: "default",
        size: "md"
    }
});
var Badge = function(param) {
    var children = param.children, variant = param.variant, color = param.color, size = param.size, className = param.className;
    return /* @__PURE__ */ React10__default.default.createElement("span", {
        className: cn(badgeVariants({
            variant: variant,
            color: color,
            size: size
        }), className)
    }, children);
};
var Separator = function(_param) {
    var _param_orientation = _param.orientation, orientation = _param_orientation === void 0 ? "horizontal" : _param_orientation, className = _param.className, props = _object_without_properties(_param, [
        "orientation",
        "className"
    ]);
    return /* @__PURE__ */ React10__default.default.createElement("div", _object_spread({
        className: "".concat(orientation === "vertical" ? "w-px h-8 bg-gray-200" : "w-full h-px bg-gray-200 my-2", " ").concat(className)
    }, props));
};
var headerVariants = classVarianceAuthority.cva("w-full flex items-center justify-between px-4 transition-colors", {
    variants: {
        variant: {
            default: "bg-white border-b",
            transparent: "bg-transparent",
            colored: "bg-primary-500"
        },
        size: {
            sm: "h-14",
            default: "h-16",
            lg: "h-20"
        },
        position: {
            fixed: "fixed top-0 left-0 right-0 z-50",
            static: "static",
            sticky: "sticky top-0 z-50"
        }
    },
    defaultVariants: {
        variant: "default",
        size: "default",
        position: "static"
    }
});
var HeaderOne = function(param) {
    var logo = param.logo, navigation = param.navigation, actions = param.actions, className = param.className, variant = param.variant, size = param.size, position = param.position, _param_maxWidth = param.maxWidth, maxWidth = _param_maxWidth === void 0 ? "2xl" : _param_maxWidth, _param_dark = param.dark, dark = _param_dark === void 0 ? false : _param_dark;
    var containerClasses = {
        sm: "max-w-screen-sm",
        md: "max-w-screen-md",
        lg: "max-w-screen-lg",
        xl: "max-w-screen-xl",
        "2xl": "max-w-screen-2xl",
        full: "w-full"
    };
    return /* @__PURE__ */ React10__default.default.createElement("header", {
        className: cn(headerVariants({
            variant: variant,
            size: size,
            position: position
        }), dark && "bg-gray-900 text-white", className)
    }, /* @__PURE__ */ React10__default.default.createElement("div", {
        className: cn("w-full mx-auto px-4", containerClasses[maxWidth])
    }, /* @__PURE__ */ React10__default.default.createElement("div", {
        className: "flex items-center justify-between h-full"
    }, logo && /* @__PURE__ */ React10__default.default.createElement("div", {
        className: "flex-shrink-0"
    }, logo), navigation && navigation.length > 0 && /* @__PURE__ */ React10__default.default.createElement("nav", {
        className: "hidden md:flex items-center space-x-4"
    }, navigation.map(function(item, index) {
        return /* @__PURE__ */ React10__default.default.createElement("div", {
            key: index,
            className: "text-sm font-medium"
        }, item);
    })), actions && actions.length > 0 && /* @__PURE__ */ React10__default.default.createElement("div", {
        className: "flex items-center space-x-4"
    }, actions.map(function(action, index) {
        return /* @__PURE__ */ React10__default.default.createElement("div", {
            key: index
        }, action);
    })))));
};
var platforms = {
    twitter: {
        icon: /* @__PURE__ */ React10__default.default.createElement(fa6.FaXTwitter, {
            className: "h-5 w-5"
        }),
        class: "bg-black hover:bg-neutral-800"
    },
    whatsapp: {
        icon: /* @__PURE__ */ React10__default.default.createElement(fa6.FaWhatsapp, {
            className: "h-5 w-5"
        }),
        class: "bg-[#25D366] hover:bg-[#22bf5b]"
    },
    instagram: {
        icon: /* @__PURE__ */ React10__default.default.createElement(fa6.FaInstagram, {
            className: "h-5 w-5"
        }),
        class: "bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#F77737] hover:opacity-90"
    },
    discord: {
        icon: /* @__PURE__ */ React10__default.default.createElement(fa6.FaDiscord, {
            className: "h-5 w-5"
        }),
        class: "bg-[#5865F2] hover:bg-[#4752c4]"
    }
};
var ctaVariants = classVarianceAuthority.cva([
    "inline-flex items-center justify-center rounded-full text-white",
    "transition-all duration-200 ease-in-out",
    "focus:outline-none focus:ring-2 focus:ring-offset-2",
    "shadow-lg hover:shadow-xl hover:scale-110",
    "fixed right-6 z-50"
], {
    variants: {
        size: {
            sm: "h-8 w-8",
            md: "h-10 w-10",
            lg: "h-12 w-12",
            xl: "h-14 w-14"
        },
        order: {
            1: "bottom-6",
            2: "bottom-[calc(1.5rem+4rem)]",
            3: "bottom-[calc(1.5rem+8rem)]",
            4: "bottom-[calc(1.5rem+12rem)]",
            5: "bottom-[calc(1.5rem+16rem)]"
        }
    },
    defaultVariants: {
        size: "md",
        order: 1
    }
});
var Cta = function(param) {
    var platform = param.platform, href = param.href, size = param.size, order = param.order, className = param.className;
    var config = platforms[platform];
    return /* @__PURE__ */ React10__default.default.createElement("a", {
        href: href,
        target: "_blank",
        rel: "noopener noreferrer",
        className: cn(ctaVariants({
            size: size,
            order: order
        }), config.class, className),
        "aria-label": "Visit our ".concat(platform)
    }, config.icon);
};
var Textarea = React10.forwardRef(function(_param, ref) {
    var className = _param.className, label = _param.label, helperText = _param.helperText, props = _object_without_properties(_param, [
        "className",
        "label",
        "helperText"
    ]);
    return /* @__PURE__ */ React10__default.default.createElement("div", {
        className: "flex flex-col space-y-1"
    }, label && /* @__PURE__ */ React10__default.default.createElement("label", {
        className: "text-sm font-medium text-gray-700 p-2"
    }, label), /* @__PURE__ */ React10__default.default.createElement("textarea", _object_spread({
        placeholder: "Type your message here",
        ref: ref,
        className: cn("block w-full rounded-md border border-gray-300 shadow-sm focus:outline-none p-2", className)
    }, props)), helperText && /* @__PURE__ */ React10__default.default.createElement("p", {
        className: "text-sm text-gray-500"
    }, helperText));
});
Textarea.displayName = "TextAreaTest";
var Checkbox = React10.forwardRef(function(_param, ref) {
    var className = _param.className, onChange = _param.onChange, disabled = _param.disabled, props = _object_without_properties(_param, [
        "className",
        "onChange",
        "disabled"
    ]);
    var _React10__default_default_useState = _sliced_to_array(React10__default.default.useState(false), 2), isChecked = _React10__default_default_useState[0], setIsChecked = _React10__default_default_useState[1];
    var handleClick = function() {
        if (disabled) return;
        setIsChecked(!isChecked);
        if (onChange) {
            var event = {
                target: {
                    checked: !isChecked
                }
            };
            onChange(event);
        }
    };
    return /* @__PURE__ */ React10__default.default.createElement("div", {
        className: cn("relative inline-flex", disabled ? "cursor-not-allowed" : "cursor-pointer"),
        onClick: handleClick
    }, /* @__PURE__ */ React10__default.default.createElement("input", _object_spread({
        type: "checkbox",
        ref: ref,
        className: "sr-only",
        checked: isChecked,
        disabled: disabled
    }, props)), /* @__PURE__ */ React10__default.default.createElement("div", {
        className: cn("h-5 w-5 rounded border transition-all duration-200", "flex items-center justify-center", !disabled && "hover:border-gray-400", !disabled && isChecked && "hover:bg-gray-900", isChecked ? "bg-black border-black text-white" : "border-gray-300 bg-white", disabled && "opacity-50 bg-gray-100", "focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-black", className)
    }, isChecked && /* @__PURE__ */ React10__default.default.createElement(fa.FaCheck, {
        className: "h-3 w-3"
    })));
});
Checkbox.displayName = "Checkbox";
var Label = function(_param) {
    var children = _param.children, className = _param.className, htmlFor = _param.htmlFor, props = _object_without_properties(_param, [
        "children",
        "className",
        "htmlFor"
    ]);
    return /* @__PURE__ */ React10__default.default.createElement("label", _object_spread({
        htmlFor: htmlFor,
        className: cn("block text-sm font-medium text-gray-700", className)
    }, props), children);
};
var cardVariants = classVarianceAuthority.cva("rounded-lg border bg-card text-card-foreground transition-all duration-200", {
    variants: {
        variant: {
            default: "bg-white shadow-sm hover:shadow-md",
            glass: "bg-white/80 backdrop-blur-sm border-white/20",
            outline: "border-2 shadow-none hover:bg-accent/5",
            ghost: "border-none shadow-none hover:bg-accent/5"
        },
        size: {
            sm: "p-4",
            default: "p-6",
            lg: "p-8"
        }
    },
    defaultVariants: {
        variant: "default",
        size: "default"
    }
});
var Card = React10__default.default.forwardRef(function(_param, ref) {
    var className = _param.className, variant = _param.variant, size = _param.size, props = _object_without_properties(_param, [
        "className",
        "variant",
        "size"
    ]);
    return /* @__PURE__ */ React10__default.default.createElement("div", _object_spread({
        ref: ref,
        className: cn(cardVariants({
            variant: variant,
            size: size,
            className: className
        }))
    }, props));
});
Card.displayName = "Card";
var CardHeader = React10__default.default.forwardRef(function(_param, ref) {
    var className = _param.className, props = _object_without_properties(_param, [
        "className"
    ]);
    return /* @__PURE__ */ React10__default.default.createElement("div", _object_spread({
        ref: ref,
        className: cn("flex flex-col gap-1.5 p-6", className)
    }, props));
});
CardHeader.displayName = "CardHeader";
var CardTitle = React10__default.default.forwardRef(function(_param, ref) {
    var className = _param.className, props = _object_without_properties(_param, [
        "className"
    ]);
    return /* @__PURE__ */ React10__default.default.createElement("h3", _object_spread({
        ref: ref,
        className: cn("text-lg font-semibold leading-none tracking-tight text-foreground", className)
    }, props));
});
CardTitle.displayName = "CardTitle";
var CardDescription = React10__default.default.forwardRef(function(_param, ref) {
    var className = _param.className, props = _object_without_properties(_param, [
        "className"
    ]);
    return /* @__PURE__ */ React10__default.default.createElement("p", _object_spread({
        ref: ref,
        className: cn("text-sm text-muted-foreground leading-relaxed", className)
    }, props));
});
CardDescription.displayName = "CardDescription";
var CardContent = React10__default.default.forwardRef(function(_param, ref) {
    var className = _param.className, props = _object_without_properties(_param, [
        "className"
    ]);
    return /* @__PURE__ */ React10__default.default.createElement("div", _object_spread({
        ref: ref,
        className: cn("p-6 pt-0 text-foreground/90 leading-relaxed", className)
    }, props));
});
CardContent.displayName = "CardContent";
var CardFooter = React10__default.default.forwardRef(function(_param, ref) {
    var className = _param.className, props = _object_without_properties(_param, [
        "className"
    ]);
    return /* @__PURE__ */ React10__default.default.createElement("div", _object_spread({
        ref: ref,
        className: cn("flex items-center justify-end p-6 pt-0 gap-4", className)
    }, props));
});
CardFooter.displayName = "CardFooter";
// src/ui/components/index.ts
var preset = {
    content: [
        "./node_modules/metamorphosis-ui/**/*.{js,ts,jsx,tsx}"
    ],
    theme: {
        extend: {}
    }
};
var components_default = preset;
exports.Badge = Badge;
exports.Button = Button;
exports.Card = Card;
exports.CardContent = CardContent;
exports.CardDescription = CardDescription;
exports.CardFooter = CardFooter;
exports.CardHeader = CardHeader;
exports.CardTitle = CardTitle;
exports.Checkbox = Checkbox;
exports.Cta = Cta;
exports.HeaderOne = HeaderOne;
exports.Input = Input;
exports.Label = Label;
exports.Separator = Separator;
exports.Textarea = Textarea;
exports.badgeVariants = badgeVariants;
exports.buttonVariants = buttonVariants;
exports.cn = cn;
exports.default = components_default;
exports.inputVariants = inputVariants;
