import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <>
        <div>
            <div className="w-full container mx-auto pb-15">  
                <div className="py-10 w-7/10 mx-auto">
                    <div className="grid grid-cols-2 md:grid-cols-4" >
                        <div className="col-span-2 p-6    ">
                            <div className="svg-container">
                                <svg  id="Logo-main" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 165.59 80.689">
                                <path id="Path_23151" data-name="Path 23151" d="M574.031,106.091v10.078h-2.845V93.546h2.845v10.063h9.288V93.546h2.846v22.623h-2.846V106.091Z" transform="translate(-570.844 -35.861)" fill="#16375b"/>
                                <path id="Path_23152" data-name="Path 23152" d="M590.26,108.09v.047a5.222,5.222,0,0,0,1.556,3.85,5.112,5.112,0,0,0,7.228.119c.049-.048.1-.1.144-.146.145-.15.431-.467.851-.991l2.673.935a8.757,8.757,0,0,1-1.4,1.775,8.059,8.059,0,0,1-11.772-11.009c.055-.057.11-.112.167-.168a8.242,8.242,0,0,1,11.6.057,7.505,7.505,0,0,1,2.06,5.532Zm.5-2.486h9.414q-1.008-2.924-4.672-2.92t-4.742,2.92Z" transform="translate(-569.734 -35.407)" fill="#16375b"/>
                                <path id="Path_23153" data-name="Path 23153" d="M620.086,115.715h-2.845V113.2a5.539,5.539,0,0,1-5.139,2.892,7.975,7.975,0,0,1-5.955-13.4c.059-.061.119-.122.179-.181a7.881,7.881,0,0,1,5.775-2.36,5.553,5.553,0,0,1,5.139,2.864v-1.682h2.845Zm-2.845-6.448v-2.295a5.365,5.365,0,0,0-5.139-4.289,5,5,0,0,0-3.678,1.57,5.3,5.3,0,0,0-1.556,3.883,5.226,5.226,0,0,0,1.556,3.85,5.112,5.112,0,0,0,7.228.119c.049-.048.1-.1.145-.146A5.14,5.14,0,0,0,617.241,109.268Z" transform="translate(-568.592 -35.407)" fill="#16375b"/>
                                <path id="Path_23154" data-name="Path 23154" d="M624.819,93.546v22.623h-2.846V93.546Z" transform="translate(-567.354 -35.861)" fill="#16375b"/>
                                <path id="Path_23155" data-name="Path 23155" d="M629.4,101.63V96.046h2.841v5.584h2.673v2.447h-2.673V116h-2.827V104.077h-2.687V101.63Z" transform="translate(-567.027 -35.689)" fill="#16375b"/>
                                <path id="Path_23156" data-name="Path 23156" d="M636.225,93.546h2.836V101.8q.72-.79,2.99-.79a5.932,5.932,0,0,1,4.392,1.663,5.631,5.631,0,0,1,1.695,4.07v9.42h-2.826V106.88a3.274,3.274,0,0,0-.991-2.425,3.144,3.144,0,0,0-4.446-.09l-.035.033a3.628,3.628,0,0,0-.771,1.052v10.722h-2.846Z" transform="translate(-566.375 -35.861)" fill="#16375b"/>
                                <path id="Path_23157" data-name="Path 23157" d="M664.06,104.286a9.739,9.739,0,0,1-3.911-2.281,4.86,4.86,0,0,1-1.481-3.57,4.956,4.956,0,0,1,1.533-3.588,5.14,5.14,0,0,1,3.813-1.552,5.261,5.261,0,0,1,3.849,1.589,5.51,5.51,0,0,1,1.308,2.293l-2.561.991a5.086,5.086,0,0,0-.85-1.649,2.37,2.37,0,0,0-3.347-.153c-.053.048-.1.1-.153.153a2.635,2.635,0,0,0-.761,1.939,2.738,2.738,0,0,0,.789,1.981,8.14,8.14,0,0,0,2.229,1.448,11.133,11.133,0,0,1,4.527,2.7,6.812,6.812,0,0,1,.18,9.632q-.088.091-.18.18a7.178,7.178,0,0,1-12.19-4.261l2.738-.991a5.689,5.689,0,0,0,1.4,3.6,4.08,4.08,0,0,0,2.986,1.257,4.167,4.167,0,0,0,3.042-1.3,4.629,4.629,0,0,0,.023-6.4A9.34,9.34,0,0,0,664.06,104.286Z" transform="translate(-564.957 -35.878)" fill="#16375b"/>
                                <path id="Path_23158" data-name="Path 23158" d="M678.548,115.826a6.09,6.09,0,0,1-4.523-1.668,5.746,5.746,0,0,1-1.706-4.084v-8.821h2.846v8.709a3.315,3.315,0,0,0,1.023,2.453,3.183,3.183,0,0,0,2.336.959,3.111,3.111,0,0,0,2.247-.981,3.276,3.276,0,0,0,.991-2.43v-8.709h2.845v8.835a5.788,5.788,0,0,1-1.728,4.117A5.873,5.873,0,0,1,678.548,115.826Z" transform="translate(-563.894 -35.331)" fill="#16375b"/>
                                <path id="Path_23159" data-name="Path 23159" d="M689.733,97.473a1.719,1.719,0,0,1,.556,1.234,1.75,1.75,0,0,1-.57,1.28,2.175,2.175,0,0,1-2.9,0,1.753,1.753,0,0,1-.565-1.28,1.723,1.723,0,0,1,.565-1.253,2.172,2.172,0,0,1,2.9,0Zm-.042,4.1v14.367h-2.827V101.571Z" transform="translate(-562.937 -35.63)" fill="#16375b"/>
                                <path id="Path_23160" data-name="Path 23160" d="M694.35,101.63V96.046h2.827v5.584h2.673v2.447h-2.673V116H694.35V104.077h-2.672V101.63Z" transform="translate(-562.564 -35.689)" fill="#16375b"/>
                                <path id="Path_23161" data-name="Path 23161" d="M703.469,108.09v.047a5.226,5.226,0,0,0,1.556,3.85,5.112,5.112,0,0,0,7.228.119c.049-.048.1-.1.145-.146.15-.15.43-.467.851-.991l2.672.935a8.752,8.752,0,0,1-1.4,1.775,8.266,8.266,0,0,1-11.611.037,7.811,7.811,0,0,1-.167-11.046c.055-.057.11-.112.167-.168a8.28,8.28,0,0,1,11.611.033,7.507,7.507,0,0,1,2.061,5.532Zm.505-2.486h9.414c-.668-1.948-2.234-2.92-4.672-2.92s-4.05.971-4.742,2.92Z" transform="translate(-561.955 -35.407)" fill="#16375b"/>
                                <g id="Group_12091" data-name="Group 12091" transform="translate(120.303 3.495)" opacity="0.75">
                                    <g id="Group_12090" data-name="Group 12090" opacity="0.25">
                                    <path id="Path_23162" data-name="Path 23162" d="M722.807,56.606,707.771,43.855l-.014.019,15.035,12.751Z" transform="translate(-681.762 -42.771)" fill="#005576"/>
                                    <path id="Path_23163" data-name="Path 23163" d="M684.459,52.252H684.4l24.969-8.41L724.412,56.6h.033Zm.061,0,39.845,4.365-15-12.737Z" transform="translate(-683.367 -42.772)" fill="#005576"/>
                                    <path id="Path_23164" data-name="Path 23164" d="M710.332,89.017h0L684.447,51.709v-.024l39.971,4.379h0Zm0-.032,14.068-32.9-39.9-4.374Z" transform="translate(-683.364 -42.233)" fill="#005576"/>
                                    <path id="Path_23165" data-name="Path 23165" d="M685.484,52.3a1.094,1.094,0,1,0-1.487.427l.005,0A1.093,1.093,0,0,0,685.484,52.3Z" transform="translate(-683.433 -42.302)" fill="#005576"/>
                                    <path id="Path_23166" data-name="Path 23166" d="M708.794,44.458a1.048,1.048,0,1,0-.005.011Z" transform="translate(-681.832 -42.84)" fill="#005576"/>
                                    <path id="Path_23167" data-name="Path 23167" d="M722.863,56.388a1.093,1.093,0,1,0-1.486.435,1.094,1.094,0,0,0,1.486-.435Z" transform="translate(-680.865 -42.021)" fill="#005576"/>
                                    <path id="Path_23168" data-name="Path 23168" d="M709.315,86.992a.687.687,0,1,0-.953.294A.707.707,0,0,0,709.315,86.992Z" transform="translate(-681.744 -39.876)" fill="#005576"/>
                                    </g>
                                </g>
                                <g id="Group_12092" data-name="Group 12092" transform="translate(105.159 7.855)" opacity="0.26">
                                    <path id="Path_23169" data-name="Path 23169" d="M692.563,90.635v.024L680.355,85.9h0L698.169,47.72Zm-.032-.028L698.1,47.944,680.378,85.873Z" transform="translate(-668.501 -46.865)" fill="#005576"/>
                                    <path id="Path_23170" data-name="Path 23170" d="M698.809,47.807h.042l-17.8,38.08v.042l-10.616-32.58h0Zm-.028.043-28.3,5.508,10.555,32.468Z" transform="translate(-669.183 -46.859)" fill="#005576"/>
                                    <path id="Path_23171" data-name="Path 23171" d="M704.1,87.635l.037.051-12.381,2.957h0l5.606-42.816v-.042Zm-.065-.028-6.644-39.724L691.78,90.626Z" transform="translate(-667.718 -46.86)" fill="#005576"/>
                                    <path id="Path_23172" data-name="Path 23172" d="M697.845,47.714a.808.808,0,1,1-.822-.794.807.807,0,0,1,.822.794Z" transform="translate(-667.41 -46.92)" fill="#005576"/>
                                    <path id="Path_23173" data-name="Path 23173" d="M671.806,53.045a1.271,1.271,0,1,1-1.308-1.233h.014A1.267,1.267,0,0,1,671.806,53.045Z" transform="translate(-669.263 -46.584)" fill="#005576"/>
                                    <path id="Path_23174" data-name="Path 23174" d="M681.614,83.482a1.187,1.187,0,1,1-1.21-1.163h0a1.176,1.176,0,0,1,1.2,1.149Z" transform="translate(-668.578 -44.487)" fill="#005576"/>
                                    <path id="Path_23175" data-name="Path 23175" d="M692.582,87.907a.758.758,0,1,1,0-.01Z" transform="translate(-667.768 -44.156)" fill="#005576"/>
                                    <path id="Path_23176" data-name="Path 23176" d="M704.914,85.3a1.346,1.346,0,1,1-1.373-1.318h0a1.341,1.341,0,0,1,1.369,1.312Z" transform="translate(-666.998 -44.373)" fill="#005576"/>
                                </g>
                                <g id="Group_12093" data-name="Group 12093" transform="translate(119.46)" opacity="0.75">
                                    <rect id="Rectangle_2575" data-name="Rectangle 2575" width="11.34" height="0.014" transform="translate(19.481 27.091) rotate(-51.74)" fill="#00576c"/>
                                    <path id="Path_23177" data-name="Path 23177" d="M726.678,65.085h0l-19.236-7.416h0l14.167-16.787h0Zm0,0-5.069-24.2L707.457,57.656Z" transform="translate(-680.941 -39.48)" fill="#00576c"/>
                                    <path id="Path_23178" data-name="Path 23178" d="M707.644,57.665h0l-3.055-7.905h0l17.217-8.878h.032Zm14.138-16.783L704.606,49.76l3.037,7.887" transform="translate(-681.137 -39.48)" fill="#00576c"/>
                                    <path id="Path_23179" data-name="Path 23179" d="M706.208,79.639v.032L700.863,65.5l7.009-8.911h0Zm0-.033,1.678-22.983L700.877,65.5Z" transform="translate(-681.393 -38.4)" fill="#00576c"/>
                                    <path id="Path_23180" data-name="Path 23180" d="M726.787,64h0L705.856,79.641h0l1.7-23.072h0Zm0,0-19.231-7.406-1.692,23.035Z" transform="translate(-681.049 -38.402)" fill="#00576c"/>
                                    <path id="Path_23181" data-name="Path 23181" d="M706.18,77.636a.626.626,0,1,0,.276.841h0A.625.625,0,0,0,706.18,77.636Z" transform="translate(-681.09 -36.959)" fill="#00576c"/>
                                    <path id="Path_23182" data-name="Path 23182" d="M701.2,64.394a.631.631,0,1,0,.275.849v0A.63.63,0,0,0,701.2,64.394Z" transform="translate(-681.433 -37.869)" fill="#00576c"/>
                                    <path id="Path_23183" data-name="Path 23183" d="M707.768,56.061a.631.631,0,1,0,.275.849v0A.631.631,0,0,0,707.768,56.061Z" transform="translate(-680.981 -38.441)" fill="#00576c"/>
                                    <path id="Path_23184" data-name="Path 23184" d="M721.119,40.2a.808.808,0,1,0,.354,1.087l0,0A.809.809,0,0,0,721.119,40.2Z" transform="translate(-680.081 -39.533)" fill="#00576c"/>
                                    <circle id="Ellipse_388" data-name="Ellipse 388" cx="0.402" cy="0.402" r="0.402" transform="translate(45.327 25.203)" fill="#00576c"/>
                                    <path id="Path_23185" data-name="Path 23185" d="M704.789,48.877a.373.373,0,0,0-.5.165l0,0a.374.374,0,1,0,.668.336h0A.379.379,0,0,0,704.789,48.877Z" transform="translate(-681.16 -38.933)" fill="#00576c"/>
                                    <path id="Path_23186" data-name="Path 23186" d="M705.107,71.624h0L698.668,78.8h0l5.1-18.077v-.028Zm0,0L703.77,60.766l-5.092,18Z" transform="translate(-681.544 -38.119)" fill="#00576c"/>
                                    <path id="Path_23187" data-name="Path 23187" d="M708.491,66.861h0l-3.738,4.771-1.346-10.919Zm0,0-5.051-6.107,1.341,10.854Z" transform="translate(-681.218 -38.117)" fill="#00576c"/>
                                    <path id="Path_23188" data-name="Path 23188" d="M697.488,45.936l-9.452,1.117,0,.014,9.447-1.117Z" transform="translate(-682.274 -39.133)" fill="#00576c"/>
                                    <path id="Path_23189" data-name="Path 23189" d="M703.889,61.856h0l-7.009-15.82h0l18.377-1.556h0Zm0,0,11.368-17.361L696.908,46.05Z" transform="translate(-681.666 -39.233)" fill="#00576c"/>
                                    <path id="Path_23190" data-name="Path 23190" d="M696.88,46.367h0l2.878-6.5h0l15.5,4.933h.028ZM715.219,44.8l-15.452-4.929-2.878,6.48" transform="translate(-681.666 -39.55)" fill="#00576c"/>
                                    <path id="Path_23191" data-name="Path 23191" d="M683.146,58.621h-.023l5.252-11.545,9.452-1.117h0Zm0-.028,14.648-12.644-9.415,1.126Z" transform="translate(-682.612 -39.132)" fill="#00576c"/>
                                    <path id="Path_23192" data-name="Path 23192" d="M699.736,78.994h0l-16.6-21.188h0l21.708,3.14Zm0,0,5.088-18.04L683.159,57.82Z" transform="translate(-682.611 -38.317)" fill="#00576c"/>
                                    <path id="Path_23193" data-name="Path 23193" d="M704.833,61.749h0l-21.7-3.14h0L697.83,45.923h0Zm0,0L697.825,45.96l-14.67,12.653Z" transform="translate(-682.611 -39.133)" fill="#00576c"/>
                                    <path id="Path_23194" data-name="Path 23194" d="M683.673,57.667a.494.494,0,1,0,0,.011Z" transform="translate(-682.645 -38.351)" fill="#00576c"/>
                                    <path id="Path_23195" data-name="Path 23195" d="M688.575,46.857a.528.528,0,1,0-.357.655l.02-.006A.531.531,0,0,0,688.575,46.857Z" transform="translate(-682.308 -39.095)" fill="#00576c"/>
                                    <path id="Path_23196" data-name="Path 23196" d="M697.414,45.811a.528.528,0,1,0-.337.668.528.528,0,0,0,.337-.668Z" transform="translate(-681.7 -39.166)" fill="#00576c"/>
                                    <path id="Path_23197" data-name="Path 23197" d="M714.39,44.394a.318.318,0,1,0-.2.4h0A.323.323,0,0,0,714.39,44.394Z" transform="translate(-680.506 -39.253)" fill="#00576c"/>
                                    <path id="Path_23198" data-name="Path 23198" d="M703.773,60.649a.355.355,0,1,0,0,.007Z" transform="translate(-681.238 -38.137)" fill="#00576c"/>
                                    <path id="Path_23199" data-name="Path 23199" d="M705.128,70.814a.434.434,0,1,0-.279.547h0a.431.431,0,0,0,.278-.541Z" transform="translate(-681.158 -37.444)" fill="#00576c"/>
                                    <path id="Path_23200" data-name="Path 23200" d="M708.564,66.371a.4.4,0,0,0-.758.252h0a.4.4,0,0,0,.758-.252Z" transform="translate(-680.917 -37.747)" fill="#00576c"/>
                                    <path id="Path_23201" data-name="Path 23201" d="M699.9,39.786a.314.314,0,1,0-.6.2.313.313,0,0,0,.393.2h0A.318.318,0,0,0,699.9,39.786Z" transform="translate(-681.501 -39.57)" fill="#00576c"/>
                                    <path id="Path_23202" data-name="Path 23202" d="M699.364,77.976a.654.654,0,1,0,0,.007Z" transform="translate(-681.586 -36.999)" fill="#00576c"/>
                                    <path id="Path_23203" data-name="Path 23203" d="M706.282,78.394a.467.467,0,0,0-.716-.6.474.474,0,0,0-.1.193.455.455,0,0,0,.813.407Z" transform="translate(-681.079 -36.955)" fill="#00576c"/>
                                    <path id="Path_23204" data-name="Path 23204" d="M708.522,75.157a.6.6,0,1,0-.811.268A.605.605,0,0,0,708.522,75.157Z" transform="translate(-680.945 -37.185)" fill="#00576c"/>
                                </g>
                                <g id="Group_12097" data-name="Group 12097" transform="translate(95.506 2.775)" opacity="0.24">
                                    <g id="Group_12095" data-name="Group 12095" opacity="0.75">
                                    <g id="Group_12094" data-name="Group 12094" opacity="0.25">
                                        <path id="Path_23205" data-name="Path 23205" d="M694.7,73.113l-17.119,5.041,0-.019L694.7,73.09Z" transform="translate(-659.038 -40.041)" fill="#005576"/>
                                        <path id="Path_23206" data-name="Path 23206" d="M719.921,64.326h0L693.588,75.2h0l.4-32.463h0ZM693.612,75.17,719.87,64.317,694.027,42.783Z" transform="translate(-657.938 -42.127)" fill="#005576"/>
                                        <path id="Path_23207" data-name="Path 23207" d="M695.871,73.814h-.037l-17.124,5.045-17.6-16.1h.051Zm-17.156,5.027,17.077-5.027-34.575-11Z" transform="translate(-660.17 -40.751)" fill="#005576"/>
                                        <path id="Path_23208" data-name="Path 23208" d="M695.842,75.2h0l-34.71-11.036h0L696.258,42.74h0ZM661.178,64.163,695.809,75.17l.411-32.388Z" transform="translate(-660.168 -42.127)" fill="#005576"/>
                                        <path id="Path_23209" data-name="Path 23209" d="M662.207,62.769a.99.99,0,1,1-1.072-.9h0a.986.986,0,0,1,1.07.895Z" transform="translate(-660.23 -40.813)" fill="#005576"/>
                                        <path id="Path_23210" data-name="Path 23210" d="M678.628,77.8a.991.991,0,1,1-1.072-.9h0a.984.984,0,0,1,1.069.895Z" transform="translate(-659.102 -39.78)" fill="#005576"/>
                                        <path id="Path_23211" data-name="Path 23211" d="M694.646,73.082a.99.99,0,1,1-1.072-.9h.012A.991.991,0,0,1,694.646,73.082Z" transform="translate(-658.001 -40.104)" fill="#005576"/>
                                        <path id="Path_23212" data-name="Path 23212" d="M694.663,42.747a.636.636,0,1,1-.687-.579h0A.641.641,0,0,1,694.663,42.747Z" transform="translate(-657.951 -42.166)" fill="#005576"/>
                                    </g>
                                    <path id="Path_23213" data-name="Path 23213" d="M719.119,62.916a.883.883,0,1,1-.953-.807h.019A.892.892,0,0,1,719.119,62.916Z" transform="translate(-656.305 -40.796)" fill="#005576"/>
                                    </g>
                                    <g id="Group_12096" data-name="Group 12096" transform="translate(18.362 5.02)" opacity="0.75">
                                    <path id="Path_23214" data-name="Path 23214" d="M699.6,50.347h0l6.62,2.094h0l-8.106,20.8Zm0,0-1.477,22.759,8.065-20.67Z" transform="translate(-675.989 -46.624)" fill="#00576c"/>
                                    <path id="Path_23215" data-name="Path 23215" d="M698.135,73.053h0l8.1-20.755v-.024l6.729,16.862h0Zm0,0,14.782-3.887-6.7-16.821Z" transform="translate(-675.988 -46.491)" fill="#00576c"/>
                                    <path id="Path_23216" data-name="Path 23216" d="M677.434,48.377h0l22.894-1.514h0l.691,3.738h0Zm.159.032,23.432,2.163-.691-3.7Z" transform="translate(-677.41 -46.863)" fill="#00576c"/>
                                    <path id="Path_23217" data-name="Path 23217" d="M677.436,48.282l-.023-.024,23.628,2.224h0L699.559,73.32h0Zm.033,0,22.077,25,1.481-22.8Z" transform="translate(-677.412 -46.767)" fill="#00576c"/>
                                    </g>
                                </g>
                                <path id="Path_23218" data-name="Path 23218" d="M702.988,60.89a.5.5,0,1,1,.054.16A.506.506,0,0,1,702.988,60.89Z" transform="translate(-561.787 -38.145)" fill="#00576c"/>
                                <path id="Path_23219" data-name="Path 23219" d="M703.867,61.866a1.14,1.14,0,1,0-.006,0ZM703.246,60a.827.827,0,0,1,1.051.513l.005.015A.836.836,0,1,1,703.242,60Z" transform="translate(-561.829 -38.191)" fill="#00576c"/>
                                <circle id="Ellipse_389" data-name="Ellipse 389" cx="0.355" cy="0.355" r="0.355" transform="translate(145.855 15.387)" fill="#00576c"/>
                                <path id="Path_23220" data-name="Path 23220" d="M707.978,55.113a.8.8,0,1,0-1.014-.512v0A.8.8,0,0,0,707.978,55.113Zm-.42-1.322a.589.589,0,1,1-.374.744h0a.584.584,0,0,1,.367-.741Z" transform="translate(-561.516 -38.61)" fill="#00576c"/>
                                <path id="Path_23221" data-name="Path 23221" d="M714.413,72.258a.556.556,0,1,1,.705.355.557.557,0,0,1-.705-.355Z" transform="translate(-561.003 -37.374)" fill="#00576c"/>
                                <path id="Path_23222" data-name="Path 23222" d="M715.388,73.336a1.271,1.271,0,1,0-1.607-.808A1.271,1.271,0,0,0,715.388,73.336Zm-.692-2.088a.935.935,0,1,1-.171.057A.869.869,0,0,1,714.7,71.248Z" transform="translate(-561.049 -37.42)" fill="#00576c"/>
                                <path id="Path_23223" data-name="Path 23223" d="M615.931,75.061a14.062,14.062,0,0,1,5.518,10.382v9.985l-45.059-30.37a14.151,14.151,0,0,1-5.523-10.419V44.668Z" transform="translate(-570.866 -39.22)" fill="#2eb9cc"/>
                                <path id="Path_23224" data-name="Path 23224" d="M589.11,77.737a11.726,11.726,0,0,1,4.6,8.652v7.943l-18.222-12.3a11.71,11.71,0,0,1-4.6-8.648V65.439Z" transform="translate(-570.865 -37.792)" fill="#2eb9cc"/>
                                <path id="Path_23225" data-name="Path 23225" d="M615.066,56.642a11.72,11.72,0,0,1,4.6,8.652V73.26L601.442,60.954a11.709,11.709,0,0,1-4.6-8.648V44.362Z" transform="translate(-569.081 -39.241)" fill="#2eb9cc"/>
                                <path id="Path_23226" data-name="Path 23226" d="M643.126,93.766V77.5a8.545,8.545,0,0,0-1.641-5.667,6.017,6.017,0,0,0-4.9-1.911,5.605,5.605,0,0,0-4.359,1.869,7,7,0,0,0-1.678,4.878,6.9,6.9,0,0,0,1.761,4.966,6.324,6.324,0,0,0,4.812,1.841,8.589,8.589,0,0,0,1.71-.2c.646-.131,1.5-.37,2.547-.7V93.7c-.869.182-1.7.313-2.48.406a19.28,19.28,0,0,1-2.178.13,16.388,16.388,0,0,1-12.273-4.961,17.291,17.291,0,0,1-4.808-12.621,17.362,17.362,0,0,1,4.831-12.615,16.368,16.368,0,0,1,12.274-4.966,16.987,16.987,0,0,1,9.288,2.635,16.347,16.347,0,0,1,6.238,7.19,15.039,15.039,0,0,1,1.131,3.9,45.43,45.43,0,0,1,.345,6.743V93.766Z" transform="translate(-567.514 -38.229)" fill="#1d829a"/>
                                <path id="Path_23227" data-name="Path 23227" d="M674.024,93.764V74.818a5.476,5.476,0,0,0-1.4-3.874,4.606,4.606,0,0,0-3.556-1.494,4.67,4.67,0,0,0-3.57,1.494,5.464,5.464,0,0,0-1.4,3.874V93.764H653.5V76.542q0-7.985,4.276-12.714A14.519,14.519,0,0,1,669.09,59.1a15.647,15.647,0,0,1,12.779,6.509,14.173,14.173,0,0,1,2.149,4.592,25.272,25.272,0,0,1,.668,6.341V93.778Z" transform="translate(-565.188 -38.228)" fill="#1d829a"/>
                                <path id="Path_23228" data-name="Path 23228" d="M723.6,60h-6.27v-6.27h-8.457V60h-6.27v8.452h6.27v6.27h8.457v-6.27h6.27Z" transform="translate(-561.813 -38.597)" fill="#e52421"/>
                                <path id="Path_23229" data-name="Path 23229" d="M701.564,93.588A16.951,16.951,0,1,1,701,59.69c.187,0,.375,0,.562,0v8.457a8.494,8.494,0,1,0,8.48,8.508v-.014H718.5A16.966,16.966,0,0,1,701.564,93.588Z" transform="translate(-563.069 -38.188)" fill="#1d829a"/>
                                </svg>
                            </div>
                            <div className="py-5 text-darky font-bold text-xs md:text-sm xl:text-md 2xl:text-lg">
                                An autonomous global healthcare technology corporation that intensely converges on developing data-driven analytics, accelerates innovation and advances healthcare transformation.
                            </div>
                            <div className="flex mt-5">
                                <Link className="mr-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="31" height="31" viewBox="0 0 31 31">
                                    <g id="icon-sm-fb" transform="translate(16914 15730)">
                                        <circle id="Ellipse_63" data-name="Ellipse 63" cx="15.5" cy="15.5" r="15.5" transform="translate(-16914 -15730)" fill="#4ebece"/>
                                        <path id="Path_15994" data-name="Path 15994" d="M72.949,136.133H70.632v7.455H67.2v-7.455H65.564v-2.918H67.2v-1.888a3.221,3.221,0,0,1,3.465-3.466l2.544.011V130.7H71.36a.7.7,0,0,0-.729.8v1.718h2.617Zm.4.088" transform="translate(-16967.564 -15850.18)" fill="#fff"/>
                                    </g>
                                    </svg>
                                </Link>

                                <Link className="mr-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="31" height="31" viewBox="0 0 31 31">
                                    <g id="icon-sm-twitter" transform="translate(16874 15730)">
                                        <path id="Path_17811" data-name="Path 17811" d="M15.5,0A15.5,15.5,0,1,1,0,15.5,15.5,15.5,0,0,1,15.5,0Z" transform="translate(-16874 -15730)" fill="#4ebece"/>
                                        <g id="Group_7094" data-name="Group 7094" transform="translate(-16866 -15720.045)">
                                        <path id="Path_4" data-name="Path 4" d="M74.654,247.678a6.211,6.211,0,0,1-1.788.49,3.123,3.123,0,0,0,1.369-1.722,6.227,6.227,0,0,1-1.976.755,3.115,3.115,0,0,0-5.3,2.839,8.834,8.834,0,0,1-6.415-3.252,3.115,3.115,0,0,0,.963,4.156,3.1,3.1,0,0,1-1.41-.39c0,.013,0,.026,0,.039a3.114,3.114,0,0,0,2.5,3.051,3.118,3.118,0,0,1-1.405.054,3.115,3.115,0,0,0,2.907,2.161,6.291,6.291,0,0,1-4.608,1.289,8.851,8.851,0,0,0,13.627-7.457q0-.2-.009-.4a6.319,6.319,0,0,0,1.553-1.611Zm0,0" transform="translate(-59.484 -246.219)" fill="#fff"/>
                                        </g>
                                    </g>
                                    </svg>
                                </Link>

                                <Link className="mr-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="31" height="31" viewBox="0 0 31 31">
                                    <g id="icon-sm-Insta" transform="translate(16834 15730)">
                                        <path id="Path_17812" data-name="Path 17812" d="M15.5,0A15.5,15.5,0,1,1,0,15.5,15.5,15.5,0,0,1,15.5,0Z" transform="translate(-16834 -15730)" fill="#4ebece"/>
                                        <g id="Group_7095" data-name="Group 7095" transform="translate(-16826 -15722.176)">
                                        <g id="Group_10" data-name="Group 10" transform="translate(0 0)">
                                            <path id="Path_6" data-name="Path 6" d="M295.689,352.863H288.7a4.3,4.3,0,0,0-4.3,4.3v6.993a4.3,4.3,0,0,0,4.3,4.3h6.993a4.3,4.3,0,0,0,4.3-4.3V357.16A4.3,4.3,0,0,0,295.689,352.863Zm3.037,11.271a3.055,3.055,0,0,1-3.055,3.055h-6.957a3.055,3.055,0,0,1-3.055-3.055v-6.957a3.055,3.055,0,0,1,3.055-3.055h6.957a3.055,3.055,0,0,1,3.055,3.055Z" transform="translate(-284.4 -352.863)" fill="#fff"/>
                                            <path id="Path_7" data-name="Path 7" d="M299.432,363.789a4.107,4.107,0,1,0,4.108,4.107A4.107,4.107,0,0,0,299.432,363.789Zm0,6.786a2.679,2.679,0,1,1,2.679-2.679A2.679,2.679,0,0,1,299.432,370.575Z" transform="translate(-291.64 -360.103)" fill="#fff"/>
                                            <path id="Path_8" data-name="Path 8" d="M319.2,361.573a.921.921,0,1,1-.922-.921A.921.921,0,0,1,319.2,361.573Z" transform="translate(-306.24 -358.024)" fill="#fff"/>
                                        </g>
                                        </g>
                                    </g>
                                    </svg>
                                </Link>

                                <Link className="mr-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="31" height="31" viewBox="0 0 31 31">
                                    <g id="icon-sm-G_" data-name="icon-sm-G+" transform="translate(16794 15730)">
                                        <path id="Path_17813" data-name="Path 17813" d="M15.5,0A15.5,15.5,0,1,1,0,15.5,15.5,15.5,0,0,1,15.5,0Z" transform="translate(-16794 -15730)" fill="#4ebece"/>
                                        <g id="Group_7096" data-name="Group 7096" transform="translate(-16786 -15720.045)">
                                        <g id="Group_15" data-name="Group 15" transform="translate(0 0)">
                                            <g id="Group_14" data-name="Group 14">
                                            <path id="Path_10" data-name="Path 10" d="M287.6,251.495v1.987h3.287a3.13,3.13,0,0,1-3.287,2.5,3.66,3.66,0,0,1,0-7.319,3.261,3.261,0,0,1,2.31.894l1.573-1.515a5.554,5.554,0,0,0-3.883-1.515,5.8,5.8,0,0,0,0,11.59,5.615,5.615,0,0,0,5.472-6.623Z" transform="translate(-281.808 -246.528)" fill="#fff"/>
                                            <path id="Path_11" data-name="Path 11" d="M325.34,257.825h-1.656v-1.656h-1.656v1.656h-1.656v1.656h1.656v1.656h1.656v-1.656h1.656Z" transform="translate(-307.127 -252.858)" fill="#fff"/>
                                            </g>
                                        </g>
                                        </g>
                                    </g>
                                    </svg>

                                </Link>

                                <Link className="mr-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="31" height="31" viewBox="0 0 31 31">
                                    <g id="icon-sm-linkIn" transform="translate(16754 15730)">
                                        <path id="Path_17814" data-name="Path 17814" d="M15.5,0A15.5,15.5,0,1,1,0,15.5,15.5,15.5,0,0,1,15.5,0Z" transform="translate(-16754 -15730)" fill="#4ebece"/>
                                        <g id="Group_7093" data-name="Group 7093" transform="translate(-16745 -15721.182)">
                                        <g id="Group_42" data-name="Group 42" transform="translate(0 0)">
                                            <g id="Group_41" data-name="Group 41">
                                            <path id="Path_21" data-name="Path 21" d="M302.205,137.039v5.089h-2.95V137.38c0-1.192-.426-2.006-1.494-2.006a1.614,1.614,0,0,0-1.513,1.079,2.022,2.022,0,0,0-.1.719v4.956H293.2s.039-8.041,0-8.874h2.951v1.257c-.006.01-.014.02-.02.029h.02v-.029a2.929,2.929,0,0,1,2.659-1.466c1.941,0,3.4,1.268,3.4,3.994Zm-13.587,5.089h2.949v-8.874h-2.949Zm0,0,3.037-11.885a1.519,1.519,0,1,1-1.519-1.519A1.519,1.519,0,0,1,291.655,130.243Z" transform="translate(-288.618 -128.724)" fill="#fff"/>
                                            </g>
                                        </g>
                                        </g>
                                    </g>
                                    </svg>
                                </Link>

                            </div>
                        </div>
                        
                        <div className="p-4">
                            <p className="text-darky font-bold text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">
                                Contact Us
                            </p>
                            <hr className="w-1/6 line my-2 bg-secondary"></hr>
                            <p className="pt-8 font-bold text-darky text-xs md:text-sm lg:text-base xl:text-xl 2xl:text-2xl 3xl:text-3xl">
                                Head Office:
                            </p>
                            <p className="pt-2 pb-4 font-bold text-darky text-xs md:text-sm xl:text-md 2xl:text-lg">
                                312, Airport Building, Port Saeed Street, Deira, Dubai, United Arab Emirates
                            </p>
                            <p className="text-darky font-bold text-xs md:text-sm xl:text-md 2xl:text-lg">
                                +971 (04) 2896 454
                            </p>
                            <p className="py-4 text-darky break-all font-bold text-xs text-xs md:text-sm xl:text-md 2xl:text-lg">
                                sales@nanohealthsuite.com
                            </p>
                        </div>

                        <div className="p-4">
                            <p className="text-darky font-bold text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">
                                Quick Links
                            </p>
                            <hr className="w-1/6 line my-2 bg-secondary"></hr>
                            <ul className="menu pt-8">
                                <li className="mb-7 text-darky font-bold text-xs md:text-sm xl:text-md 2xl:text-lg">About NANO Health Suite</li>
                                <li className="mb-7 text-darky font-bold text-xs md:text-sm xl:text-md 2xl:text-lg">Terms & Conditions</li>
                                <li className="mb-7 text-darky font-bold text-xs md:text-sm xl:text-md 2xl:text-lg">Privacy Policy</li>
                                <li className="mb-7 text-darky font-bold text-xs md:text-sm xl:text-md 2xl:text-lg">Support</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="py-10 w-7/10 mx-auto">
                    <p className="text-center text-darky text-xs md:text-sm xl:text-md 2xl:text-lg">
                        This site is protected by reCAPTCHA and the Google <span className="text-secondary">Privacy Policy</span> and <span className="text-secondary">Terms of Service apply</span>.
                    </p>
                </div>
            </div>

            <div className="bg-primary py-3 text-center text-white text-xs md:text-sm xl:text-md 2xl:text-lg">
                © Copyright 2021 Nano Health Suite. All Rights Reserved.
            </div>
        </div>
        </>
    );
}

export default Footer;