/**
 * File: navplate.js
 * Type: Javascript component
 * Author: Chris Humboldt
 */

// Table of contents
// ---------------------------------------------------------------------------------------
// Default setup
// Component
// Variables
// Options
// Tools

// Default setup
var $navplateSetup = {
   active: 'small',
   clone: false,
   reveal: 'left',
   type: 'slide'
};

// Component
var navplate = function($selector, $userOptions) {
   // Variables
   var $self = this;

   // Options
   $userOptions = $userOptions || false;
   $self.options = {
      active: $userOptions.active || $navplateSetup.active,
      clone: $userOptions.clone || $navplateSetup.clone,
      type: $userOptions.type || $navplateSetup.type,
      reveal: $userOptions.reveal || $navplateSetup.reveal
   }

   // Tools
   var tool = function(document, $options) {
      // Elements
      var $toolEl = {
         body: document.getElementsByTagName('body')[0],
         html: document.getElementsByTagName('html')[0]
      };

      // Functions
      var classAdd = function($element, $class) {
         var $crtClass = $element.className;
         if ($crtClass.match(new RegExp('\\b' + $class + '\\b', 'g')) === null) {
            $element.className = $crtClass === '' ? $class : $crtClass + ' ' + $class;
         }
      };
      var classClear = function($element) {
         $element.removeAttribute('class');
      };
      var classRemove = function($element, $class) {
         if ($element.className.indexOf($class) > -1) {
            $element.className = $element.className.split(' ').filter(function($val) {
               return $val != $class;
            }).toString().replace(/,/g, ' ');
            if ($element.className === '') {
               classClear($element);
            }
         }
      };
      var exists = function($element) {
         if ($element === null || typeof($element) === undefined) {
            return false;
         } else {
            return true;
         }
      };
      var isTouch = function() {
         return 'ontouchstart' in window || 'onmsgesturechange' in window;
      };

      // Return
      return {
         classAdd: classAdd,
         classClear: classClear,
         classRemove: classRemove,
         element: $toolEl,
         exists: exists,
         isTouch: isTouch
      }
   }(document, $self.options);

   // Apply to element
   var $selectorType = $selector.charAt(0).toString();
   if ($selectorType === '#') {
      new navplateComponent(document.getElementById($selector.substring(1)), $self.options, tool);
   } else {
      var $elements = document.querySelectorAll($selector);
      for (var $i = $elements.length - 1; $i >= 0; $i--) {
         new navplateComponent($elements[$i], $self.options, tool);
      };
   }
};

var navplateComponent = function($this, $option, tool) {
   // Variables
   var $self = $this;
   var $link = $self.getAttribute('data-nav-link');
   var $navElement = document.querySelector($link);

   // Setup
   function navSetup() {
      tool.classAdd($self, 'navplate-trigger' + ' active-' + $option.active);

      // Clone
      if ($option.clone === true) {
         var $navClone = $navElement.cloneNode(true);
         tool.classAdd($navClone, 'navplate type-' + $option.type + ' reveal-' + $option.reveal + ' active-' + $option.active);
         tool.element.body.appendChild($navClone);
      } else {
         tool.classAdd($navElement, 'navplate type-' + $option.type + ' reveal-' + $option.reveal + ' active-' + $option.active);
      }
   }

   // Execute
   navSetup();
};
