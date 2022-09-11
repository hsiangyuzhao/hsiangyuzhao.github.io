---
layout: blog
title: Research
slug: /research
---
### Prior Attention Network for Multi-Lesion Segmentation in Medical Images
- Accpted by [IEEE Transactions on Medical Imaging, 2022](https://ieeexplore.ieee.org/abstract/document/9852260);
- Code, pretrained weights and our results are available at [https://github.com/hsiangyuzhao/PANet](https://github.com/hsiangyuzhao/PANet).

The accurate segmentation of multiple types of lesions from adjacent tissues in medical images is significant 
in clinical practice. Convolutional neural networks (CNNs) based on the coarse-to-fine strategy have been widely 
used in this field. However, multi-lesion segmentation remains to be challenging due to the uncertainty in size, 
contrast, and high interclass similarity of tissues. In addition, the commonly adopted cascaded strategy is rather 
demanding in terms of hardware, which limits the potential of clinical deployment. To address the problems above, 
we propose a novel Prior Attention Network (PANet) that follows the coarse-to-fine strategy to perform multi-lesion
segmentation in medical images. The proposed network achieves the two steps of segmentation in a single network by
inserting a lesion-related spatial attention mechanism in the network. Further, we also propose the intermediate 
supervision strategy for generating lesion-related attention to acquire the regions of interest (ROIs), which 
accelerates the convergence and obviously improves the segmentation performance. We have investigated the proposed
segmentation framework in two applications: 2D segmentation of multiple lung infections in lung CT slices and 
3D segmentation of multiple lesions in brain MRIs. Experimental results show that in both 2D and 3D segmentation
tasks our proposed network achieves better performance with less computational cost compared with cascaded 
networks. The proposed network can be regarded as a universal solution to multi-lesion segmentation in both 2D 
and 3D tasks. The source code is available at [https://github.com/hsiangyuzhao/PANet](https://github.com/hsiangyuzhao/PANet).
![](/assets/img/content/panet.jpg)
### TBI-GAN: An Adversarial Learning Approach for Data Synthesis on Traumatic Brain Segmentation
- [arXiv:2208.06099](https://arxiv.org/abs/2208.06099).

Brain network analysis for traumatic brain injury (TBI) patients is critical for its consciousness level assessment
and prognosis evaluation, which requires the segmentation of certain consciousness-related brain regions. However, 
it is difficult to construct a TBI segmentation model as manually annotated MR scans of TBI patients are hard to 
collect. Data augmentation techniques can be applied to alleviate the issue of data scarcity. However, conventional 
data augmentation strategies such as spatial and intensity transformation are unable to mimic the deformation and 
lesions in traumatic brains, which limits the performance of the subsequent segmentation task. To address these issues,
we propose a novel medical image inpainting model named TBI-GAN to synthesize TBI MR scans with paired brain label 
maps. The main strength of our TBI-GAN method is that it can generate TBI images and corresponding label maps 
simultaneously, which has not been achieved in the previous inpainting methods for medical images. We first generate
the inpainted image under the guidance of edge information following a coarse-to-fine manner, and then the synthesized
intensity image is used as the prior for label inpainting. Furthermore, we introduce a registration-based template 
augmentation pipeline to increase the diversity of the synthesized image pairs and enhance the capacity of data 
augmentation. Experimental results show that the proposed TBI-GAN method can produce sufficient synthesized TBI images
with high quality and valid label maps, which can greatly improve the 2D and 3D traumatic brain segmentation 
performance compared with the alternatives.
![](/assets/img/content/tbi.jpg)
