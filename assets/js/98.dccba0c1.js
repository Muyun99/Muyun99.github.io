(window.webpackJsonp=window.webpackJsonp||[]).push([[98],{522:function(e,t,r){"use strict";r.r(t);var n=r(25),a=Object(n.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"一些文章"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#一些文章"}},[e._v("#")]),e._v(" 一些文章")]),e._v(" "),r("h3",{attrs:{id:"_1、proxy-task-的设计"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1、proxy-task-的设计"}},[e._v("#")]),e._v(" 1、Proxy task 的设计")]),e._v(" "),r("h4",{attrs:{id:"_1-1-基于先验知识的设计"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-基于先验知识的设计"}},[e._v("#")]),e._v(" 1.1 基于先验知识的设计")]),e._v(" "),r("p",[e._v("1.1.1 利用 Motion propagation 来设计 proxy task")]),e._v(" "),r("p",[e._v("​\t"),r("a",{attrs:{href:"https://arxiv.org/abs/1903.11412",target:"_blank",rel:"noopener noreferrer"}},[e._v("Self-Supervised Learning via Conditional Motion Propagation"),r("OutboundLink")],1)]),e._v(" "),r("p",[e._v("1.1.2 利用 Motion Prediction 来设计 proxy task")]),e._v(" "),r("p",[e._v("​\t"),r("a",{attrs:{href:"https://arxiv.org/abs/1505.00295",target:"_blank",rel:"noopener noreferrer"}},[e._v("Dense Optical Flow Prediction From a Static Image"),r("OutboundLink")],1)]),e._v(" "),r("h4",{attrs:{id:"_1-2-基于连贯性的设计"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-基于连贯性的设计"}},[e._v("#")]),e._v(" 1.2 基于连贯性的设计")]),e._v(" "),r("p",[e._v("1.2.1 利用 Jigsaw Puzzles （物体的语义连贯性）来设计proxy task")]),e._v(" "),r("p",[e._v("​\t"),r("a",{attrs:{href:"https://arxiv.org/abs/1603.09246",target:"_blank",rel:"noopener noreferrer"}},[e._v("Unsupervised Learning of Visual Representations by Solving Jigsaw Puzzles"),r("OutboundLink")],1)]),e._v(" "),r("p",[e._v("1.2.2 利用视频中物体运动的时间连贯性来设计 proxy task")]),e._v(" "),r("p",[e._v("​\t"),r("a",{attrs:{href:"https://arxiv.org/abs/1603.08561",target:"_blank",rel:"noopener noreferrer"}},[e._v("Shuffle and Learn: Unsupervised Learning using Temporal Order Verification"),r("OutboundLink")],1)]),e._v(" "),r("p",[r("img",{attrs:{src:"https://muyun-blog-pic.oss-cn-shanghai.aliyuncs.com/picgo/tLk2DsENYVvPOau.png",alt:""}})]),e._v(" "),r("h4",{attrs:{id:"_1-3-基于数据内部结构的设计"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-基于数据内部结构的设计"}},[e._v("#")]),e._v(" 1.3 基于数据内部结构的设计")]),e._v(" "),r("p",[e._v("目前很火的基于contrastive learning的方法，包括NPID, MoCo, SimCLR等，我们可以将它们统一为instance discrimination [6]任务。如下图，这类任务通常对图片做各种变换，然后优化目标是同一张图片的不同变换在特征空间中尽量接近，不同图片在特征空间中尽量远离。")]),e._v(" "),r("p",[e._v("1.3.1 Momentum Contrast for Unsupervised Visual Representation Learning (MoCov1)")]),e._v(" "),r("p",[e._v("​\t"),r("a",{attrs:{href:"https://arxiv.org/abs/1911.05722",target:"_blank",rel:"noopener noreferrer"}},[e._v("Momentum Contrast for Unsupervised Visual Representation Learning"),r("OutboundLink")],1)]),e._v(" "),r("p",[e._v("1.3.2 Improved Baselines with Momentum Contrastive Learning (Mocov2)")]),e._v(" "),r("p",[e._v("​\t"),r("a",{attrs:{href:"https://arxiv.org/abs/2003.04297",target:"_blank",rel:"noopener noreferrer"}},[e._v("Improved Baselines with Momentum Contrastive Learning"),r("OutboundLink")],1)]),e._v(" "),r("p",[e._v("1.3.3 A Simple Framework for Contrastive Learning of Visual Representations (SimCLRv1)")]),e._v(" "),r("p",[e._v("​\t"),r("a",{attrs:{href:"https://arxiv.org/abs/2002.05709",target:"_blank",rel:"noopener noreferrer"}},[e._v("A Simple Framework for Contrastive Learning of Visual Representations"),r("OutboundLink")],1)]),e._v(" "),r("p",[e._v("1.3.4 Big Self-Supervised Models are Strong Semi-Supervised Learners (SimCLRv2)")]),e._v(" "),r("p",[e._v("​\t"),r("a",{attrs:{href:"https://arxiv.org/abs/2006.10029",target:"_blank",rel:"noopener noreferrer"}},[e._v("Big Self-Supervised Models are Strong Semi-Supervised Learners"),r("OutboundLink")],1)]),e._v(" "),r("p",[e._v("​\t这一篇本质上应该是算半监督学习")]),e._v(" "),r("p",[e._v("1.3.5 Bootstrap your own latent: A new approach to self-supervised Learning (BYOL)")]),e._v(" "),r("p",[e._v("​\t"),r("a",{attrs:{href:"https://arxiv.org/abs/2006.07733",target:"_blank",rel:"noopener noreferrer"}},[e._v("Bootstrap your own latent: A new approach to self-supervised Learning"),r("OutboundLink")],1)]),e._v(" "),r("h4",{attrs:{id:"_1-4-其他的设计"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1-4-其他的设计"}},[e._v("#")]),e._v(" 1.4 其他的设计")]),e._v(" "),r("p",[e._v("1.4.1利用 图像着色来设计 proxy task")]),e._v(" "),r("p",[e._v("​\t"),r("a",{attrs:{href:"https://arxiv.org/abs/1603.08511",target:"_blank",rel:"noopener noreferrer"}},[e._v("Colorful Image Colorization"),r("OutboundLink")],1),r("img",{attrs:{src:"https://muyun-blog-pic.oss-cn-shanghai.aliyuncs.com/picgo/image-20210324001651999.png",alt:"image-20210324001651999"}})]),e._v(" "),r("p",[e._v("1.4.2 利用 Image Inpainting 来设计 proxy task")]),e._v(" "),r("p",[e._v("​\t"),r("a",{attrs:{href:"https://arxiv.org/abs/1604.07379",target:"_blank",rel:"noopener noreferrer"}},[e._v("Context Encoders: Feature Learning by Inpainting"),r("OutboundLink")],1)]),e._v(" "),r("p",[e._v("​\t"),r("img",{attrs:{src:"https://muyun-blog-pic.oss-cn-shanghai.aliyuncs.com/picgo/image-20210324001740370.png",alt:"image-20210324001740370"}})]),e._v(" "),r("p",[e._v("1.4.3 利用 Rotation Prediction 来设计 proxy task")]),e._v(" "),r("p",[e._v("​\t"),r("a",{attrs:{href:"https://arxiv.org/abs/1803.07728",target:"_blank",rel:"noopener noreferrer"}},[e._v("Unsupervised Representation Learning by Predicting Image Rotations"),r("OutboundLink")],1)]),e._v(" "),r("p",[e._v("​\t"),r("img",{attrs:{src:"https://muyun-blog-pic.oss-cn-shanghai.aliyuncs.com/picgo/image-20210324001249021.png",alt:"image-20210324001249021"}})]),e._v(" "),r("p",[e._v("1.4.4 利用 Instance Discrimination 来设计 proxy task")]),e._v(" "),r("p",[e._v("1.4.5利用 Counting 来设计 proxy task")]),e._v(" "),r("p",[e._v("1.4.6利用 Moving foreground segmentation 来设计 proxy task")]),e._v(" "),r("p",[e._v("1.4.7 利用Context Prediction 来设计 proxy task")]),e._v(" "),r("p",[e._v("​\t "),r("a",{attrs:{href:"https://arxiv.org/abs/1505.05192",target:"_blank",rel:"noopener noreferrer"}},[e._v("Unsupervised Visual Representation Learning by Context Prediction"),r("OutboundLink")],1)]),e._v(" "),r("p",[e._v("​\t"),r("img",{attrs:{src:"https://muyun-blog-pic.oss-cn-shanghai.aliyuncs.com/picgo/image-20210324001226268.png",alt:"image-20210324001226268"}})]),e._v(" "),r("h3",{attrs:{id:"_2、基于对比学习的文章"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2、基于对比学习的文章"}},[e._v("#")]),e._v(" 2、基于对比学习的文章")]),e._v(" "),r("p",[r("img",{attrs:{src:"https://muyun-blog-pic.oss-cn-shanghai.aliyuncs.com/picgo/image-20210323235716715.png",alt:"image-20210323235716715"}})]),e._v(" "),r("p",[e._v("1.3.1 Momentum Contrast for Unsupervised Visual Representation Learning (MoCov1)")]),e._v(" "),r("p",[e._v("​\t"),r("a",{attrs:{href:"https://arxiv.org/abs/1911.05722",target:"_blank",rel:"noopener noreferrer"}},[e._v("Momentum Contrast for Unsupervised Visual Representation Learning"),r("OutboundLink")],1)]),e._v(" "),r("p",[e._v("1.3.2 Improved Baselines with Momentum Contrastive Learning (Mocov2)")]),e._v(" "),r("p",[e._v("​\t"),r("a",{attrs:{href:"https://arxiv.org/abs/2003.04297",target:"_blank",rel:"noopener noreferrer"}},[e._v("Improved Baselines with Momentum Contrastive Learning"),r("OutboundLink")],1)]),e._v(" "),r("p",[e._v("1.3.3 A Simple Framework for Contrastive Learning of Visual Representations (SimCLRv1)")]),e._v(" "),r("p",[e._v("​\t"),r("a",{attrs:{href:"https://arxiv.org/abs/2002.05709",target:"_blank",rel:"noopener noreferrer"}},[e._v("A Simple Framework for Contrastive Learning of Visual Representations"),r("OutboundLink")],1)]),e._v(" "),r("p",[e._v("1.3.4 Big Self-Supervised Models are Strong Semi-Supervised Learners (SimCLRv2)")]),e._v(" "),r("p",[e._v("​\t"),r("a",{attrs:{href:"https://arxiv.org/abs/2006.10029",target:"_blank",rel:"noopener noreferrer"}},[e._v("Big Self-Supervised Models are Strong Semi-Supervised Learners"),r("OutboundLink")],1)]),e._v(" "),r("p",[e._v("​\t这一篇本质上应该是算半监督学习")]),e._v(" "),r("p",[e._v("1.3.5 Bootstrap your own latent: A new approach to self-supervised Learning (BYOL)")]),e._v(" "),r("p",[e._v("​\t"),r("a",{attrs:{href:"https://arxiv.org/abs/2006.07733",target:"_blank",rel:"noopener noreferrer"}},[e._v("Bootstrap your own latent: A new approach to self-supervised Learning"),r("OutboundLink")],1)]),e._v(" "),r("p",[e._v("1.3.6 Data-Efficient Image Recognition with Contrastive Predictive Coding (CPCv2)")]),e._v(" "),r("p",[e._v("​\t"),r("a",{attrs:{href:"https://arxiv.org/abs/1905.09272",target:"_blank",rel:"noopener noreferrer"}},[e._v("Data-Efficient Image Recognition with Contrastive Predictive Coding"),r("OutboundLink")],1)]),e._v(" "),r("p",[e._v("1.3.7 Unsupervised Learning of Visual Featuresby Contrasting Cluster Assignments (SwAV)")]),e._v(" "),r("p",[e._v("​\t"),r("a",{attrs:{href:"https://arxiv.org/abs/2006.09882",target:"_blank",rel:"noopener noreferrer"}},[e._v("Unsupervised Learning of Visual Featuresby Contrasting Cluster Assignments"),r("OutboundLink")],1)]),e._v(" "),r("p",[e._v("1.3.8 Exploring Simple Siamese Representation Learning（SimSiam）")]),e._v(" "),r("p",[e._v("​\t"),r("a",{attrs:{href:"https://arxiv.org/abs/2011.10566",target:"_blank",rel:"noopener noreferrer"}},[e._v("Exploring Simple Siamese Representation Learning"),r("OutboundLink")],1)]),e._v(" "),r("p",[e._v("1.3.9 Propagate Yourself: Exploring Pixel-Level Consistency for Unsupervised VisualRepresentation Learning（PixPro, CVPR 2021）")]),e._v(" "),r("p",[e._v("​\tpaper: "),r("a",{attrs:{href:"https://arxiv.org/abs/2011.10043",target:"_blank",rel:"noopener noreferrer"}},[e._v("Propagate Yourself: Exploring Pixel-Level Consistency for Unsupervised Visual Representation Learning"),r("OutboundLink")],1)]),e._v(" "),r("p",[e._v("​\tcode: "),r("a",{attrs:{href:"https://github.com/zdaxie/PixPro",target:"_blank",rel:"noopener noreferrer"}},[e._v("Propagate Yourself: Exploring Pixel-Level Consistency for Unsupervised Visual Representation Learning, CVPR 2021"),r("OutboundLink")],1)]),e._v(" "),r("p",[e._v("1.3.10 AdCo: Adversarial Contrast for Efficient Learning of Unsupervised Representations from Self-Trained Negative Adversaries（AdCo, CVPR 2021）")]),e._v(" "),r("p",[e._v("​\tpaper: "),r("a",{attrs:{href:"https://arxiv.org/abs/2011.08435",target:"_blank",rel:"noopener noreferrer"}},[e._v("AdCo: Adversarial Contrast for Efficient Learning of Unsupervised Representations from Self-Trained Negative Adversaries"),r("OutboundLink")],1)]),e._v(" "),r("p",[e._v("​\tcode: "),r("a",{attrs:{href:"https://github.com/maple-research-lab/AdCo/",target:"_blank",rel:"noopener noreferrer"}},[e._v("AdCo: Adversarial Contrast for Efficient Learning of Unsupervised Representations from Self-Trained Negative Adversaries"),r("OutboundLink")],1)]),e._v(" "),r("table",[r("thead",[r("tr",[r("th",{staticStyle:{"text-align":"center"}},[e._v("Date")]),e._v(" "),r("th",{staticStyle:{"text-align":"center"}},[e._v("Training Paradigm")]),e._v(" "),r("th",{staticStyle:{"text-align":"center"}},[e._v("Method")]),e._v(" "),r("th",{staticStyle:{"text-align":"center"}},[e._v("Backbone")]),e._v(" "),r("th",{staticStyle:{"text-align":"center"}},[e._v("Label fraction")]),e._v(" "),r("th",{staticStyle:{"text-align":"center"}},[e._v("Top-1 Accuracy")])])]),e._v(" "),r("tbody",[r("tr",[r("td",{staticStyle:{"text-align":"center"}},[e._v("2019-11")]),e._v(" "),r("td",{staticStyle:{"text-align":"center"}},[e._v("Semi Sup.")]),e._v(" "),r("td",{staticStyle:{"text-align":"center"}},[e._v("Noisy Student")]),e._v(" "),r("td",{staticStyle:{"text-align":"center"}},[e._v("EfficientNet(480M)")]),e._v(" "),r("td",{staticStyle:{"text-align":"center"}},[e._v("100+extra")]),e._v(" "),r("td",{staticStyle:{"text-align":"center"}},[e._v("88.4-")])]),e._v(" "),r("tr",[r("td",{staticStyle:{"text-align":"center"}},[e._v("-")]),e._v(" "),r("td",{staticStyle:{"text-align":"center"}},[e._v("Sup.")]),e._v(" "),r("td",{staticStyle:{"text-align":"center"}},[e._v("-")]),e._v(" "),r("td",{staticStyle:{"text-align":"center"}},[e._v("ResNet50(24M)")]),e._v(" "),r("td",{staticStyle:{"text-align":"center"}},[e._v("100")]),e._v(" "),r("td",{staticStyle:{"text-align":"center"}},[e._v("76.5")])]),e._v(" "),r("tr",[r("td",{staticStyle:{"text-align":"center"}},[e._v("2020-06")]),e._v(" "),r("td",{staticStyle:{"text-align":"center"}},[e._v("Self Sup")]),e._v(" "),r("td",{staticStyle:{"text-align":"center"}},[e._v("SwAV")]),e._v(" "),r("td",{staticStyle:{"text-align":"center"}},[e._v("ResNet50(24M)")]),e._v(" "),r("td",{staticStyle:{"text-align":"center"}},[e._v("0")]),e._v(" "),r("td",{staticStyle:{"text-align":"center"}},[e._v("75.3")])]),e._v(" "),r("tr",[r("td",{staticStyle:{"text-align":"center"}},[e._v("2020-06")]),e._v(" "),r("td",{staticStyle:{"text-align":"center"}},[e._v("Self Sup")]),e._v(" "),r("td",{staticStyle:{"text-align":"center"}},[e._v("BYOL")]),e._v(" "),r("td",{staticStyle:{"text-align":"center"}},[e._v("ResNet50(24M)")]),e._v(" "),r("td",{staticStyle:{"text-align":"center"}},[e._v("0")]),e._v(" "),r("td",{staticStyle:{"text-align":"center"}},[e._v("74.3")])]),e._v(" "),r("tr",[r("td",{staticStyle:{"text-align":"center"}},[e._v("2020-03")]),e._v(" "),r("td",{staticStyle:{"text-align":"center"}},[e._v("Self Sup")]),e._v(" "),r("td",{staticStyle:{"text-align":"center"}},[e._v("Moco v2")]),e._v(" "),r("td",{staticStyle:{"text-align":"center"}},[e._v("ResNet50(24M)")]),e._v(" "),r("td",{staticStyle:{"text-align":"center"}},[e._v("0")]),e._v(" "),r("td",{staticStyle:{"text-align":"center"}},[e._v("71.1")])]),e._v(" "),r("tr",[r("td",{staticStyle:{"text-align":"center"}},[e._v("2020-02")]),e._v(" "),r("td",{staticStyle:{"text-align":"center"}},[e._v("Self Sup")]),e._v(" "),r("td",{staticStyle:{"text-align":"center"}},[e._v("SimCLR v1")]),e._v(" "),r("td",{staticStyle:{"text-align":"center"}},[e._v("ResNet50(24M)")]),e._v(" "),r("td",{staticStyle:{"text-align":"center"}},[e._v("0")]),e._v(" "),r("td",{staticStyle:{"text-align":"center"}},[e._v("69.3")])]),e._v(" "),r("tr",[r("td",{staticStyle:{"text-align":"center"}},[e._v("2019-05")]),e._v(" "),r("td",{staticStyle:{"text-align":"center"}},[e._v("Self Sup")]),e._v(" "),r("td",{staticStyle:{"text-align":"center"}},[e._v("CPCv2")]),e._v(" "),r("td",{staticStyle:{"text-align":"center"}},[e._v("ResNet50(24M)")]),e._v(" "),r("td",{staticStyle:{"text-align":"center"}},[e._v("0")]),e._v(" "),r("td",{staticStyle:{"text-align":"center"}},[e._v("63.8")])]),e._v(" "),r("tr",[r("td",{staticStyle:{"text-align":"center"}},[e._v("2019-11")]),e._v(" "),r("td",{staticStyle:{"text-align":"center"}},[e._v("Self Sup")]),e._v(" "),r("td",{staticStyle:{"text-align":"center"}},[e._v("Moco v1")]),e._v(" "),r("td",{staticStyle:{"text-align":"center"}},[e._v("ResNet50(24M)")]),e._v(" "),r("td",{staticStyle:{"text-align":"center"}},[e._v("0")]),e._v(" "),r("td",{staticStyle:{"text-align":"center"}},[e._v("60.6")])])])]),e._v(" "),r("h3",{attrs:{id:"_3、参考文献"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_3、参考文献"}},[e._v("#")]),e._v(" 3、参考文献")]),e._v(" "),r("ul",[r("li",[r("p",[r("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/150224914",target:"_blank",rel:"noopener noreferrer"}},[e._v("自监督学习的一些思考"),r("OutboundLink")],1)])]),e._v(" "),r("li",[r("p",[r("a",{attrs:{href:"https://mp.weixin.qq.com/s/HfqH-b8x8SsE6zb8pcF3Og",target:"_blank",rel:"noopener noreferrer"}},[e._v("自监督学习（Self-Supervised Learning） 2018-2020年发展综述"),r("OutboundLink")],1)])]),e._v(" "),r("li",[r("p",[r("a",{attrs:{href:"https://www.yuque.com/weijiawu/gx662d/tgrsmz",target:"_blank",rel:"noopener noreferrer"}},[e._v("自监督学习(Self-Supervised Learning)综述_1"),r("OutboundLink")],1)])]),e._v(" "),r("li",[r("p",[r("a",{attrs:{href:"https://www.yuque.com/weijiawu/gx662d/lbewm1",target:"_blank",rel:"noopener noreferrer"}},[e._v("自监督学习(Self-Supervised Learning)综述_2"),r("OutboundLink")],1)])]),e._v(" "),r("li",[r("p",[r("a",{attrs:{href:"https://ankeshanand.com/blog/2020/01/26/contrative-self-supervised-learning.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Contrastive Self-Supervised Learning"),r("OutboundLink")],1)])]),e._v(" "),r("li",[r("p",[r("a",{attrs:{href:"http://tech.sina.com.cn/csj/2020-09-09/doc-iivhuipp3366946.shtml",target:"_blank",rel:"noopener noreferrer"}},[e._v("「上帝视角」看对比自监督学习，SimCLR、CPC、AMDIM并无本质差异"),r("OutboundLink")],1)])]),e._v(" "),r("li",[r("p",[r("a",{attrs:{href:"https://paperswithcode.com/sota/self-supervised-image-classification-on",target:"_blank",rel:"noopener noreferrer"}},[e._v("Self-Supervised Image Classification on ImageNet"),r("OutboundLink")],1)])]),e._v(" "),r("li",[r("p",[r("a",{attrs:{href:"https://paperswithcode.com/sota/self-supervised-image-classification-on-1",target:"_blank",rel:"noopener noreferrer"}},[e._v("Self-Supervised Image Classification on ImageNet (finetuned)"),r("OutboundLink")],1)])]),e._v(" "),r("li",[r("p",[r("a",{attrs:{href:"https://arxiv.org/abs/2006.08218",target:"_blank",rel:"noopener noreferrer"}},[e._v("Self-supervised Learning: Generative or Contrastive"),r("OutboundLink")],1)])]),e._v(" "),r("li",[r("p",[r("a",{attrs:{href:"https://zhizhou-yu.github.io/2020/06/26/Self-supervised-Learning-Generative-or-Contrastive.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Self-supervised Learning: Generative or Contrastive 自监督学习2020综述"),r("OutboundLink")],1)])]),e._v(" "),r("li",[r("p",[r("a",{attrs:{href:"https://github.com/jason718/awesome-self-supervised-learning",target:"_blank",rel:"noopener noreferrer"}},[e._v("A curated list of awesome self-supervised methods"),r("OutboundLink")],1)])])]),e._v(" "),r("p",[e._v("4、参考代码")]),e._v(" "),r("ul",[r("li",[r("p",[r("a",{attrs:{href:"https://github.com/lightly-ai/lightly",target:"_blank",rel:"noopener noreferrer"}},[e._v("A python library for self-supervised learning on images."),r("OutboundLink")],1)])]),e._v(" "),r("li",[r("p",[r("a",{attrs:{href:"https://github.com/open-mmlab/OpenSelfSup",target:"_blank",rel:"noopener noreferrer"}},[e._v("Self-Supervised Learning Toolbox and Benchmark"),r("OutboundLink")],1)])])])])}),[],!1,null,null,null);t.default=a.exports}}]);