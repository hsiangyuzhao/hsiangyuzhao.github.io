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

### RCPS: Rectified Contrastive Pseudo Supervision for Semi-Supervised Medical Image Segmentation

- [arXiv:2301.05500](https://arxiv.org/abs/2301.05500)
- Code and pretrained weights are available at [https://github.com/hsiangyuzhao/RCPS](https://github.com/hsiangyuzhao/RCPS).

Medical image segmentation methods are generally designed as fully-supervised to guarantee model performance, which require a significant amount of expert annotated samples that are high-cost and laborious. Semi-supervised image segmentation can alleviate the problem by utilizing a large number of unlabeled images along with limited labeled images. However, learning a robust representation from numerous unlabeled images remains challenging due to potential noise in pseudo labels and insufficient class separability in feature space, which undermines the performance of current semi-supervised segmentation approaches. To address the issues above, we propose a novel semi-supervised segmentation method named as Rectified Contrastive Pseudo Supervision (RCPS), which combines a rectified pseudo supervision and voxel-level contrastive learning to improve the effectiveness of semi-supervised segmentation. Particularly, we design a novel rectification strategy for the pseudo supervision method based on uncertainty estimation and consistency regularization to reduce the noise influence in pseudo labels. Furthermore, we introduce a bidirectional voxel contrastive loss to the network to ensure intra-class consistency and inter-class contrast in feature space, which increases class separability in the segmentation. The proposed RCPS segmentation method has been validated on two public datasets and an in-house clinical dataset. Experimental results reveal that the proposed method yields better segmentation performance compared with the state-of-the-art methods in semi-supervised medical image segmentation. The source code is available at [this https URL](https://github.com/hsiangyuzhao/RCPS).

![](/assets/img/content/rcps.jpg)
