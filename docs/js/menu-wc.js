'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">server documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-AppModule-1932add4d35b93f78a30e17c7d82f8a9f0fefab527a4e391ddc3ae9405185fb086087497c2a11ae29314653082eb6723dfe687c8517d3b6239df0464a753a9ba"' : 'data-target="#xs-controllers-links-module-AppModule-1932add4d35b93f78a30e17c7d82f8a9f0fefab527a4e391ddc3ae9405185fb086087497c2a11ae29314653082eb6723dfe687c8517d3b6239df0464a753a9ba"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AppModule-1932add4d35b93f78a30e17c7d82f8a9f0fefab527a4e391ddc3ae9405185fb086087497c2a11ae29314653082eb6723dfe687c8517d3b6239df0464a753a9ba"' :
                                            'id="xs-controllers-links-module-AppModule-1932add4d35b93f78a30e17c7d82f8a9f0fefab527a4e391ddc3ae9405185fb086087497c2a11ae29314653082eb6723dfe687c8517d3b6239df0464a753a9ba"' }>
                                            <li class="link">
                                                <a href="controllers/AppController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AppModule-1932add4d35b93f78a30e17c7d82f8a9f0fefab527a4e391ddc3ae9405185fb086087497c2a11ae29314653082eb6723dfe687c8517d3b6239df0464a753a9ba"' : 'data-target="#xs-injectables-links-module-AppModule-1932add4d35b93f78a30e17c7d82f8a9f0fefab527a4e391ddc3ae9405185fb086087497c2a11ae29314653082eb6723dfe687c8517d3b6239df0464a753a9ba"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-1932add4d35b93f78a30e17c7d82f8a9f0fefab527a4e391ddc3ae9405185fb086087497c2a11ae29314653082eb6723dfe687c8517d3b6239df0464a753a9ba"' :
                                        'id="xs-injectables-links-module-AppModule-1932add4d35b93f78a30e17c7d82f8a9f0fefab527a4e391ddc3ae9405185fb086087497c2a11ae29314653082eb6723dfe687c8517d3b6239df0464a753a9ba"' }>
                                        <li class="link">
                                            <a href="injectables/AppService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/MongoConnectionModule.html" data-type="entity-link" >MongoConnectionModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-MongoConnectionModule-884e813347aec8d8e7ef05ca258a1a17ff04c10265a5d4b8bb9c50813fedc6c409b041995ee68cbfdedb43fb978f231763fbf8fd15a16ee747c9105c3870f286"' : 'data-target="#xs-injectables-links-module-MongoConnectionModule-884e813347aec8d8e7ef05ca258a1a17ff04c10265a5d4b8bb9c50813fedc6c409b041995ee68cbfdedb43fb978f231763fbf8fd15a16ee747c9105c3870f286"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-MongoConnectionModule-884e813347aec8d8e7ef05ca258a1a17ff04c10265a5d4b8bb9c50813fedc6c409b041995ee68cbfdedb43fb978f231763fbf8fd15a16ee747c9105c3870f286"' :
                                        'id="xs-injectables-links-module-MongoConnectionModule-884e813347aec8d8e7ef05ca258a1a17ff04c10265a5d4b8bb9c50813fedc6c409b041995ee68cbfdedb43fb978f231763fbf8fd15a16ee747c9105c3870f286"' }>
                                        <li class="link">
                                            <a href="injectables/ApiSyncMachinesService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ApiSyncMachinesService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/CWLService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CWLService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/LabService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LabService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/SamplesService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SamplesService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/SatelliteMachineService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SatelliteMachineService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/SatelliteService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SatelliteService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/SatelliteTasksService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SatelliteTasksService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/SubDomainService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SubDomainService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/TasksQueueService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TasksQueueService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/SatInterfaceModule.html" data-type="entity-link" >SatInterfaceModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-SatInterfaceModule-1ea527d4e28e546ee01b1bf729cf9a5f3578e32044e3c007d0db4a880c293637f0d8d29e7f6d3172675b1b9d314efee4decb5ee35a46e808c01013078d4d462e"' : 'data-target="#xs-controllers-links-module-SatInterfaceModule-1ea527d4e28e546ee01b1bf729cf9a5f3578e32044e3c007d0db4a880c293637f0d8d29e7f6d3172675b1b9d314efee4decb5ee35a46e808c01013078d4d462e"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-SatInterfaceModule-1ea527d4e28e546ee01b1bf729cf9a5f3578e32044e3c007d0db4a880c293637f0d8d29e7f6d3172675b1b9d314efee4decb5ee35a46e808c01013078d4d462e"' :
                                            'id="xs-controllers-links-module-SatInterfaceModule-1ea527d4e28e546ee01b1bf729cf9a5f3578e32044e3c007d0db4a880c293637f0d8d29e7f6d3172675b1b9d314efee4decb5ee35a46e808c01013078d4d462e"' }>
                                            <li class="link">
                                                <a href="controllers/SatInterfaceController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SatInterfaceController</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/StateMachineModules.html" data-type="entity-link" >StateMachineModules</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-StateMachineModules-0e61bb8ef3f30ba826b363d9cf2922e69d7f77af3d3070baf423be527fbda19a14fc7386e6570fca3a9ab271cf3f51ade449ce26af890c1cf79e17221fc5185b"' : 'data-target="#xs-injectables-links-module-StateMachineModules-0e61bb8ef3f30ba826b363d9cf2922e69d7f77af3d3070baf423be527fbda19a14fc7386e6570fca3a9ab271cf3f51ade449ce26af890c1cf79e17221fc5185b"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-StateMachineModules-0e61bb8ef3f30ba826b363d9cf2922e69d7f77af3d3070baf423be527fbda19a14fc7386e6570fca3a9ab271cf3f51ade449ce26af890c1cf79e17221fc5185b"' :
                                        'id="xs-injectables-links-module-StateMachineModules-0e61bb8ef3f30ba826b363d9cf2922e69d7f77af3d3070baf423be527fbda19a14fc7386e6570fca3a9ab271cf3f51ade449ce26af890c1cf79e17221fc5185b"' }>
                                        <li class="link">
                                            <a href="injectables/StateMachinesService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >StateMachinesService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/AbsoluteUrlSettings.html" data-type="entity-link" >AbsoluteUrlSettings</a>
                            </li>
                            <li class="link">
                                <a href="classes/ApiSyncMachine.html" data-type="entity-link" >ApiSyncMachine</a>
                            </li>
                            <li class="link">
                                <a href="classes/Config.html" data-type="entity-link" >Config</a>
                            </li>
                            <li class="link">
                                <a href="classes/CWL.html" data-type="entity-link" >CWL</a>
                            </li>
                            <li class="link">
                                <a href="classes/Date.html" data-type="entity-link" >Date</a>
                            </li>
                            <li class="link">
                                <a href="classes/Date-1.html" data-type="entity-link" >Date</a>
                            </li>
                            <li class="link">
                                <a href="classes/Date-2.html" data-type="entity-link" >Date</a>
                            </li>
                            <li class="link">
                                <a href="classes/Description.html" data-type="entity-link" >Description</a>
                            </li>
                            <li class="link">
                                <a href="classes/ExceptionFilter.html" data-type="entity-link" >ExceptionFilter</a>
                            </li>
                            <li class="link">
                                <a href="classes/git.html" data-type="entity-link" >git</a>
                            </li>
                            <li class="link">
                                <a href="classes/Lab.html" data-type="entity-link" >Lab</a>
                            </li>
                            <li class="link">
                                <a href="classes/MachineCommand.html" data-type="entity-link" >MachineCommand</a>
                            </li>
                            <li class="link">
                                <a href="classes/Metadata.html" data-type="entity-link" >Metadata</a>
                            </li>
                            <li class="link">
                                <a href="classes/OnOptions.html" data-type="entity-link" >OnOptions</a>
                            </li>
                            <li class="link">
                                <a href="classes/Options.html" data-type="entity-link" >Options</a>
                            </li>
                            <li class="link">
                                <a href="classes/PublicInformation.html" data-type="entity-link" >PublicInformation</a>
                            </li>
                            <li class="link">
                                <a href="classes/Sample.html" data-type="entity-link" >Sample</a>
                            </li>
                            <li class="link">
                                <a href="classes/Satellite.html" data-type="entity-link" >Satellite</a>
                            </li>
                            <li class="link">
                                <a href="classes/SatelliteMachine.html" data-type="entity-link" >SatelliteMachine</a>
                            </li>
                            <li class="link">
                                <a href="classes/SatelliteTask.html" data-type="entity-link" >SatelliteTask</a>
                            </li>
                            <li class="link">
                                <a href="classes/ServiceTag.html" data-type="entity-link" >ServiceTag</a>
                            </li>
                            <li class="link">
                                <a href="classes/State.html" data-type="entity-link" >State</a>
                            </li>
                            <li class="link">
                                <a href="classes/StateOptions.html" data-type="entity-link" >StateOptions</a>
                            </li>
                            <li class="link">
                                <a href="classes/SubDomain.html" data-type="entity-link" >SubDomain</a>
                            </li>
                            <li class="link">
                                <a href="classes/TasksQueue.html" data-type="entity-link" >TasksQueue</a>
                            </li>
                            <li class="link">
                                <a href="classes/Type.html" data-type="entity-link" >Type</a>
                            </li>
                            <li class="link">
                                <a href="classes/UnProcessedStateMachine.html" data-type="entity-link" >UnProcessedStateMachine</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#guards-links"' :
                            'data-target="#xs-guards-links"' }>
                            <span class="icon ion-ios-lock"></span>
                            <span>Guards</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="guards-links"' : 'id="xs-guards-links"' }>
                            <li class="link">
                                <a href="guards/AuthGuard.html" data-type="entity-link" >AuthGuard</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/APISyncComplete.html" data-type="entity-link" >APISyncComplete</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/APISyncMessage.html" data-type="entity-link" >APISyncMessage</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/APISyncService.html" data-type="entity-link" >APISyncService</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/APISyncStateMachineObject.html" data-type="entity-link" >APISyncStateMachineObject</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/CreateAPIMachine.html" data-type="entity-link" >CreateAPIMachine</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/CustomPm2StartOptions.html" data-type="entity-link" >CustomPm2StartOptions</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/DependencyTree.html" data-type="entity-link" >DependencyTree</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/FileFromClient.html" data-type="entity-link" >FileFromClient</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/LocalFiles.html" data-type="entity-link" >LocalFiles</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/MachineCommand.html" data-type="entity-link" >MachineCommand</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/MessageToSatellite.html" data-type="entity-link" >MessageToSatellite</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/OnOptions.html" data-type="entity-link" >OnOptions</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/OptionTypes.html" data-type="entity-link" >OptionTypes</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Output.html" data-type="entity-link" >Output</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ProcessedStateMachine.html" data-type="entity-link" >ProcessedStateMachine</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ProcessedTree.html" data-type="entity-link" >ProcessedTree</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/RemoteModule.html" data-type="entity-link" >RemoteModule</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SatelliteConnection.html" data-type="entity-link" >SatelliteConnection</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SatelliteMessage.html" data-type="entity-link" >SatelliteMessage</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SatelliteOutput.html" data-type="entity-link" >SatelliteOutput</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SatelliteTask.html" data-type="entity-link" >SatelliteTask</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SciDapDuplexStream.html" data-type="entity-link" >SciDapDuplexStream</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SendEvent.html" data-type="entity-link" >SendEvent</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ServiceCommand.html" data-type="entity-link" >ServiceCommand</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/StartOptions.html" data-type="entity-link" >StartOptions</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/StateMachineOptions.html" data-type="entity-link" >StateMachineOptions</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/StateOptions.html" data-type="entity-link" >StateOptions</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/StoreKey.html" data-type="entity-link" >StoreKey</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/TriggerContext.html" data-type="entity-link" >TriggerContext</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/UnProcessedStateMachineOptions.html" data-type="entity-link" >UnProcessedStateMachineOptions</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/typealiases.html" data-type="entity-link">Type aliases</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});