"use strict";
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
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) {
            symbols = symbols.filter(function(sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            });
        }
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _object_spread_props(target, source) {
    source = source != null ? source : {};
    if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
        ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
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
function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
}
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = function(target, all) {
    for(var name in all)__defProp(target, name, {
        get: all[name],
        enumerable: true
    });
};
var __copyProps = function(to, from, except, desc) {
    if (from && (typeof from === "undefined" ? "undefined" : _type_of(from)) === "object" || typeof from === "function") {
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            var _loop = function() {
                var key = _step.value;
                if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, {
                    get: function() {
                        return from[key];
                    },
                    enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
                });
            };
            for(var _iterator = __getOwnPropNames(from)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true)_loop();
        } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
        } finally{
            try {
                if (!_iteratorNormalCompletion && _iterator.return != null) {
                    _iterator.return();
                }
            } finally{
                if (_didIteratorError) {
                    throw _iteratorError;
                }
            }
        }
    }
    return to;
};
var __toCommonJS = function(mod) {
    return __copyProps(__defProp({}, "__esModule", {
        value: true
    }), mod);
};
// src/ui/components/index.ts
var components_exports = {};
__export(components_exports, {
    Badge: function() {
        return Badge;
    },
    Button: function() {
        return Button;
    },
    Cta: function() {
        return Cta;
    },
    HeaderOne: function() {
        return HeaderOne;
    },
    Input: function() {
        return Input;
    },
    Separator: function() {
        return Separator;
    },
    badgeVariants: function() {
        return badgeVariants;
    },
    buttonVariants: function() {
        return buttonVariants;
    },
    cn: function() {
        return cn;
    },
    inputVariants: function() {
        return inputVariants;
    }
});
module.exports = __toCommonJS(components_exports);
// src/ui/components/Button.tsx
var import_react = require("react");
var import_class_variance_authority = require("class-variance-authority");
// src/lib/utils.ts
var import_clsx = require("clsx");
var import_tailwind_merge = require("tailwind-merge");
function cn() {
    for(var _len = arguments.length, inputs = new Array(_len), _key = 0; _key < _len; _key++){
        inputs[_key] = arguments[_key];
    }
    return (0, import_tailwind_merge.twMerge)((0, import_clsx.clsx)(inputs));
}
// src/ui/components/Button.tsx
var import_jsx_runtime = require("react/jsx-runtime");
var buttonVariants = (0, import_class_variance_authority.cva)("inline-flex items-center justify-center rounded-md text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none", {
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
var Button = (0, import_react.forwardRef)(function(_param, ref) {
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
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", _object_spread_props(_object_spread({
        className: cn(buttonVariants({
            variant: variant,
            color: color,
            size: size,
            fullWidth: fullWidth
        }), className),
        ref: ref,
        disabled: disabled || loading
    }, props), {
        children: loading ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
            className: "flex items-center gap-2",
            children: children
        }) : children
    }));
});
Button.displayName = "Button";
// src/ui/components/Input.tsx
var import_react2 = require("react");
var import_class_variance_authority2 = require("class-variance-authority");
var import_jsx_runtime2 = require("react/jsx-runtime");
var inputVariants = (0, import_class_variance_authority2.cva)("flex w-full rounded-md border text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50", {
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
var Input = (0, import_react2.forwardRef)(function(_param, ref) {
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
    return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", {
        className: "space-y-1",
        children: [
            label && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("label", {
                className: "text-sm font-medium text-gray-700",
                children: label
            }),
            /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", {
                className: "relative",
                children: [
                    startIcon && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", {
                        className: "absolute left-3 top-1/2 -translate-y-1/2 text-gray-500",
                        children: startIcon
                    }),
                    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("input", _object_spread({
                        className: cn(inputVariants({
                            variant: inputVariant,
                            size: size,
                            fullWidth: fullWidth
                        }), startIcon && "pl-10", endIcon && "pr-10", className),
                        ref: ref,
                        disabled: disabled
                    }, props)),
                    endIcon && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", {
                        className: "absolute right-3 top-1/2 -translate-y-1/2 text-gray-500",
                        children: endIcon
                    })
                ]
            }),
            (helperText || error || success) && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("p", {
                className: cn("text-xs", error && "text-red-600", success && "text-green-600", !error && !success && "text-gray-500"),
                children: error || success || helperText
            })
        ]
    });
});
Input.displayName = "Input";
// src/ui/components/Badge.tsx
var import_class_variance_authority3 = require("class-variance-authority");
var import_jsx_runtime3 = require("react/jsx-runtime");
var badgeVariants = (0, import_class_variance_authority3.cva)("inline-flex items-center justify-center rounded-full font-medium text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2", {
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
    return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", {
        className: cn(badgeVariants({
            variant: variant,
            color: color,
            size: size
        }), className),
        children: children
    });
};
// src/ui/components/Separator.tsx
var import_jsx_runtime4 = require("react/jsx-runtime");
var Separator = function(_param) {
    var _param_orientation = _param.orientation, orientation = _param_orientation === void 0 ? "horizontal" : _param_orientation, className = _param.className, props = _object_without_properties(_param, [
        "orientation",
        "className"
    ]);
    return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", _object_spread({
        className: "".concat(orientation === "vertical" ? "w-px h-8 bg-gray-200" : "w-full h-px bg-gray-200 my-2", " ").concat(className)
    }, props));
};
// src/ui/components/Headers/HeaderOne.tsx
var import_class_variance_authority4 = require("class-variance-authority");
var import_jsx_runtime5 = require("react/jsx-runtime");
var headerVariants = (0, import_class_variance_authority4.cva)("w-full flex items-center justify-between px-4 transition-colors", {
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
    return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("header", {
        className: cn(headerVariants({
            variant: variant,
            size: size,
            position: position
        }), dark && "bg-gray-900 text-white", className),
        children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", {
            className: cn("w-full mx-auto px-4", containerClasses[maxWidth]),
            children: /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", {
                className: "flex items-center justify-between h-full",
                children: [
                    logo && /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", {
                        className: "flex-shrink-0",
                        children: logo
                    }),
                    navigation && navigation.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("nav", {
                        className: "hidden md:flex items-center space-x-4",
                        children: navigation.map(function(item, index) {
                            return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", {
                                className: "text-sm font-medium",
                                children: item
                            }, index);
                        })
                    }),
                    actions && actions.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", {
                        className: "flex items-center space-x-4",
                        children: actions.map(function(action, index) {
                            return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", {
                                children: action
                            }, index);
                        })
                    })
                ]
            })
        })
    });
};
// src/ui/components/Cta.tsx
var import_fa6 = require("react-icons/fa6");
var import_class_variance_authority5 = require("class-variance-authority");
var import_jsx_runtime6 = require("react/jsx-runtime");
var platforms = {
    twitter: {
        icon: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(import_fa6.FaXTwitter, {
            className: "h-5 w-5"
        }),
        class: "bg-black hover:bg-neutral-800"
    },
    whatsapp: {
        icon: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(import_fa6.FaWhatsapp, {
            className: "h-5 w-5"
        }),
        class: "bg-[#25D366] hover:bg-[#22bf5b]"
    },
    instagram: {
        icon: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(import_fa6.FaInstagram, {
            className: "h-5 w-5"
        }),
        class: "bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#F77737] hover:opacity-90"
    },
    discord: {
        icon: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(import_fa6.FaDiscord, {
            className: "h-5 w-5"
        }),
        class: "bg-[#5865F2] hover:bg-[#4752c4]"
    }
};
var ctaVariants = (0, import_class_variance_authority5.cva)([
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
    return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("a", {
        href: href,
        target: "_blank",
        rel: "noopener noreferrer",
        className: cn(ctaVariants({
            size: size,
            order: order
        }), config.class, className),
        "aria-label": "Visit our ".concat(platform),
        children: config.icon
    });
};
{}// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
    Badge: Badge,
    Button: Button,
    Cta: Cta,
    HeaderOne: HeaderOne,
    Input: Input,
    Separator: Separator,
    badgeVariants: badgeVariants,
    buttonVariants: buttonVariants,
    cn: cn,
    inputVariants: inputVariants
});
//# sourceMappingURL=index.js.map