var sliderInitedit = {
                initSlider
                        : function (elementId, imageArray)
                        {
                            var timeInterval;
                            imageArray = imageArray.reverse();
                            var template = document.getElementById("sliderContainerTemplate").innerHTML;
                            var tmpSliderHolder = "";
                            for (var i = 0; i < imageArray.length; i++)
                            {
                                var img = imageArray[i];
                                var txtTemplate = template;
                                txtTemplate = txtTemplate.replace(/\{\{title\}\}/g, img.title);
                                txtTemplate = txtTemplate.replace(/\{\{img\}\}/g, img.imageUrl);
                                txtTemplate = txtTemplate.replace(/\{\{description\}\}/g, img.description);
                                tmpSliderHolder = txtTemplate + tmpSliderHolder;
                            }
                            var tmpSliderIndexTick = "";
                            for (var i = 0; i < imageArray.length; i++)
                            {
                                tmpSliderIndexTick = "<span class='navCircle'></span>" + tmpSliderIndexTick;
                            }



                            tmpSliderHolder = "<div class='sliderSlideContainer'>" + tmpSliderHolder + "<div class='sliderNav'>{{sliderNav}}</div></div>";
                            tmpSliderHolder = tmpSliderHolder.replace(/\{\{sliderNav\}\}/g, tmpSliderIndexTick);
                            document.getElementById(elementId).innerHTML = tmpSliderHolder;
                            var bindData = {
                                elementId: elementId,
                                images: imageArray,
                                currentImageSliderIndex: 0,
                                timeInterval: timeInterval
                            };
                            var elementToChangeContiner = document.getElementById(bindData.elementId);
                            var oldElementToChange = elementToChangeContiner.children[0].children[bindData.currentImageSliderIndex];
                            oldElementToChange.className += " sliderSlideSelected ";
                            var oldElementNavToChange = elementToChangeContiner.children[0].getElementsByClassName("sliderNav")[0];
                            oldElementNavToChange.children[bindData.currentImageSliderIndex].className += " navCircleSelected "

                            document.getElementById(elementId).addEventListener("wheel", sliderInitedit.sliderMouseWheel.bind(bindData));
                            for (var j = 0; j < oldElementNavToChange.children.length; j++)
                            {
                                var child = oldElementNavToChange.children[ j];
                                child.index = j;
                                child.addEventListener("click", sliderInitedit.sliderNavClick.bind(bindData));
                            }
                            bindData.timeInterval = setTimeout(sliderInitedit.sliderInterval.bind(bindData), 5000);
                        }
                ,
                sliderInterval: function ()
                {
                    var elementToChangeContiner = document.getElementById(this.elementId);
                    var oldElementToChange = elementToChangeContiner.children[0].children[this.currentImageSliderIndex];
                    oldElementToChange.className = oldElementToChange.className.replace("sliderSlideSelected", " ");
                    var oldElementNavToChange = elementToChangeContiner.children[0].getElementsByClassName("sliderNav")[0];
                    var oldElementNavToChangeChild = oldElementNavToChange.children[this.currentImageSliderIndex];
                    oldElementNavToChangeChild.className = oldElementNavToChangeChild.className.replace("navCircleSelected", " ");
                    this.currentImageSliderIndex++;
                    if (this.currentImageSliderIndex > this.images.length - 1)
                    {
                        this.currentImageSliderIndex = 0;
                    }

                    var newElementToChange = elementToChangeContiner.children[0].children[this.currentImageSliderIndex];
                    newElementToChange.className += " sliderSlideSelected ";
                    var oldElementNavToChange = elementToChangeContiner.children[0].getElementsByClassName("sliderNav")[0];
                    oldElementNavToChange.children[this.currentImageSliderIndex].className += " navCircleSelected ";
                    this.timeInterval = setTimeout(sliderInitedit.sliderInterval.bind(this), 5000);
                }
                ,
                sliderNavClick: function (e)
                {
                    clearInterval(this.timeInterval);
                    this.timeInterval = setTimeout(sliderInitedit.sliderInterval.bind(this), 5000);
                    var elementToChangeContiner = document.getElementById(this.elementId);
                    var oldElementToChange = elementToChangeContiner.children[0].children[this.currentImageSliderIndex];
                    oldElementToChange.className = oldElementToChange.className.replace("sliderSlideSelected", " ");
                    var oldElementNavToChange = elementToChangeContiner.children[0].getElementsByClassName("sliderNav")[0];
                    var oldElementNavToChangeChild = oldElementNavToChange.children[this.currentImageSliderIndex];
                    oldElementNavToChangeChild.className = oldElementNavToChangeChild.className.replace("navCircleSelected", " ");
                    this.currentImageSliderIndex = e.target.index;
                    var newElementToChange = elementToChangeContiner.children[0].children[this.currentImageSliderIndex];
                    newElementToChange.className += " sliderSlideSelected ";
                    var oldElementNavToChange = elementToChangeContiner.children[0].getElementsByClassName("sliderNav")[0];
                    oldElementNavToChange.children[this.currentImageSliderIndex].className += " navCircleSelected ";
                }
                ,
                sliderMouseWheel: function (e)
                {
                    clearInterval(this.timeInterval);
                    this.timeInterval = setTimeout(sliderInitedit.sliderInterval.bind(this), 5000);
                    var elementToChangeContiner = document.getElementById(this.elementId);
                    var oldElementToChange = elementToChangeContiner.children[0].children[this.currentImageSliderIndex];
                    oldElementToChange.className = oldElementToChange.className.replace("sliderSlideSelected", " ");
                    var oldElementNavToChange = elementToChangeContiner.children[0].getElementsByClassName("sliderNav")[0];
                    var oldElementNavToChangeChild = oldElementNavToChange.children[this.currentImageSliderIndex];
                    oldElementNavToChangeChild.className = oldElementNavToChangeChild.className.replace("navCircleSelected", " ");
                    var isScrolledUp = e.wheelDelta > 0 ? true : false;
                    if (isScrolledUp)
                    {
                        this.currentImageSliderIndex--;
                        if (this.currentImageSliderIndex < 0)
                        {
                            this.currentImageSliderIndex = this.images.length - 1;
                        }
                    } else {
                        this.currentImageSliderIndex++;
                        if (this.currentImageSliderIndex > this.images.length - 1)
                        {
                            this.currentImageSliderIndex = 0;
                        }
                    }

                    var newElementToChange = elementToChangeContiner.children[0].children[this.currentImageSliderIndex];
                    newElementToChange.className += " sliderSlideSelected ";

                    var oldElementNavToChange = elementToChangeContiner.children[0].getElementsByClassName("sliderNav")[0];
                    oldElementNavToChange.children[this.currentImageSliderIndex].className += " navCircleSelected ";
                }
            }
